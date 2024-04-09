import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled;
const featureState = process.argv[3]; // example on/off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removedFeatureName) {
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
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

// function checks if this function is called ToggleFeatures
function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
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

  if (featureName !== removedFeatureName) return;

  // if we leave feature - we must remove old code
  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }
  // if we turn off the feature - we remove feature
  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
  jsxAttributes.find((node) => node.getName() === name);

// removes () from components if they exist
const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1); // remove " "

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

// call expression - function in AST
files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    // check for toggleFeatures helper
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      replaceToggleFunction(node);
    }
    // check for ToggleFeatures helper
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceComponent(node);
    }
  });
});

project.save();
