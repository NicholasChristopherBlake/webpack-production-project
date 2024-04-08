import { Node, Project, SyntaxKind } from 'ts-morph';

const removeFeatureName = process.argv[2]; // example isArticleEnabled;
const featureState = process.argv[3]; // example on/off

if (!removeFeatureName) {
  throw new Error('Enter name of the feature flag');
}
if (!featureState) {
  throw new Error('Enter state of the feature (on / off)');
}
if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Incorrect state of the feature. Must be "on" or "off"');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

// function checks if this function is called toggleFeatures()
function isToggleFunction(node: Node) {
  // type Node must be imported from ts-morph
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

// call expression - function in AST
files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) return; // type check for undefined

      const onFunctionProperty = objectOptions?.getProperty('on');
      const offFunctionProperty = objectOptions?.getProperty('off');
      const featureNameProperty = objectOptions?.getProperty('name');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1); // slice to remove " "

      if (featureName !== removeFeatureName) return;

      // if we leave feature - we must remove old code
      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }
      // if we turn off the feature - we remove feature
      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
