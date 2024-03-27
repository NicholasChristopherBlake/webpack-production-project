import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

// add all files from src to project class
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

// we must add alias only to these imports. NOT to libraries, not to anything else
function isAbsolute(value: string) {
  const layers = ['app', 'pages', 'widgets', 'features', 'entity', 'shared'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
  // check if the file index.ts already exists
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}';
    `;
    const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
    file.save(); // physically creates file on PC
  }
});

// automatically remove all double (e.g. shared/ui/Text/Text) from imports in all files
files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      // delete last folder (shared/ui/Text/Text) for example
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

// must save project for applying changes
project.save();
