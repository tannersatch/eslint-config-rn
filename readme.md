# Preferred Settings for ESLint and Prettier

These are my preferred settings for ESLint and Prettier.

Before you get too impressed, know that the majority of this work was done by
the one and only [@wesbos](https://wesbos.com/)

To see his original project without my tweaks, check out [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

## Installation

1. Run the following at the root level in your project.

```
npx install-peerdeps --dev eslint-config-tannersatch
```

2. Add the following to the `package.json` file for your project.

```
"eslintConfig": {
  "extends": [
    "tannersatch"
  ]
},
```

For more installation information and tips, check out [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)