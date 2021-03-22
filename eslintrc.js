module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'wesbos'],
  rules: {
    "react/prop-types": 0,
    "camelcase": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ]
  },
};

