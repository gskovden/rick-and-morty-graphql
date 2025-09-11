module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "simple-import-sort", "prettier"],
  ignorePatterns: ["App.tsx", "vite.config.ts", "index.d.ts"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        bracketSameLine: true,
        width: 50,
        endOfLine: "auto",
      },
    ],
    "react-refresh/only-export-components": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-types": "off",
    "react-hooks/rules-of-hooks": "off",
  },
};
