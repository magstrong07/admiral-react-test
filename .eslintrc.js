module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "react",
      "@typescript-eslint",
      "prettier",
      "import",
    ],
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "env": {
      "browser": true
  },
    "rules": {
      "no-console": 0,       // Means off
      "prettier/prettier": 2, // Means error,
      "import/no-cycle": [2, { "ignoreExternal": true }],
    },
    
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
    "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"]
      }
    }
  };