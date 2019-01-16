module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "eslint:recommended"
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "trailingComma": "es5",
            "bracketSpacing": true,
            "tabWidth": 4,
            "printWidth": 120
        }],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
