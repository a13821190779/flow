module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "standard",
    "parserOptions": {
        "sourceType": "module"
    },
    "parser": "babel-eslint", // https://github.com/babel/babel-eslint/issues/312
    "plugins": ["standard", "promise", "flowtype"]
    "rules": {
        "indent": [
            "error",
            4
        ],
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
        ]
    }
};