module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    settings: {
        react: {
            pragma: "h",
            version: "detect"
        }
    },
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true
    },
    rules: {
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
        "@typescript-eslint/interface-name-prefix": "warn"
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off"
            }
        }
    ]
};
