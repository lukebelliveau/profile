module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "mocha"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-curly-spacing": "off",
        "no-extra-semi": "off"

    }
};