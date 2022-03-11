module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
    "unused-imports",
    "unused-vars",
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

    "prettier/prettier": "error",
  },
};
