module.exports = {
  root:true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    version: "17.0.1",
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    semi: [2, "always"],
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "no-empty": "warn",
  },
  settings: {
    "import/core-modules": [],
    "import/resolver": {
      alias: [["~", "./"]],
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
