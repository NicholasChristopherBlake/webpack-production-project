module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "linebreak-style": 0,
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "warn",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-underscore-dangle": "off",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "i18next/no-literal-string": ["warn", { markupOnly: true }],
    "max-len": ['error', { ignoreComments: true, code: 100 }],
    quotes: "off",
  },
  globals: {
    __IS_DEV__: true,
  },
};

