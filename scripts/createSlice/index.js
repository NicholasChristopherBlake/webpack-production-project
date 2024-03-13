const createTemplate = require('./templates/createTemplate');

// get arguments from the line, that we call script with
// For example: node ./scripts/createSlice/index.js features NewFeature
const layer = process.argv[2];
const sliceName = process.argv[3];

// no widgets because they are usually more complicated
const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Enter layer ${layers.join(' or ')}`);
}

if (!sliceName) {
  throw new Error('Enter slice name');
}

// call createTemplate function
createTemplate(layer, sliceName);
