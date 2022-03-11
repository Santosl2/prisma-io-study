module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
    "unused-imports",
    "prettier",
  ],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        // example configuration
        newlinesBetween: "always", // new line between groups
        groups: ["/^react/", "module", "/^@//", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    "prettier/prettier": "error",
    "jsx-quotes": ["error", "prefer-double"],
    quotes: ["error", "double"],
  },
};
