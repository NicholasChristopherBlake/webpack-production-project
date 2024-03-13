const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
      export { ${componentName} } from './ui/${componentName}/${componentName}';`,
    );
  } catch (e) {
    console.log(`Wasn't able to create PUBLIC API`);
  }
};
