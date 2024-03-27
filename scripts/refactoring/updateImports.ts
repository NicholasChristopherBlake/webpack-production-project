import { Project } from 'ts-morph';

const project = new Project({});

// add all files from src to project class
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

// we must add alias only to these imports. NOT to libraries, not to anything else
function isAbsolute(value: string) {
  const layers = ['app', 'pages', 'widgets', 'features', 'entity', 'shared'];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  // a lot of methods here. For example - getImportDeclarations from AST
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    // adding @/ alias for absolute imports in src
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

// must save project for applying changes
project.save();
