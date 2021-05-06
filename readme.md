
![npm](https://img.shields.io/npm/v/eslint-config-tannersatch?style=for-the-badge)

  
# Preferred Settings for ESLint and Prettier

These are my preferred settings for ESLint and Prettier.

Before you get too impressed, know that the majority of this work was done by the one and only [@wesbos](https://wesbos.com/)

To see his original project without my tweaks, check out [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)


## Installation 

Install my-project with npm at root level in your project

```bash 
  npx install-peerdeps --dev eslint-config-tannersatch
```

Extend your eslint config in your `package.json` file

```json
  "eslintConfig": {
    "extends": [
      "tannersatch"
    ]
  },
```

For more installation information and tips, check out [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
