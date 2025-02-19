/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "drizzle", "boundaries"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "boundaries/no-unknown": ["error"],
    "boundaries/no-unknown-files": ["error"],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["shared"],
            allow: ["shared"],
          },
          {
            from: ["feature"],
            allow: [
              "shared",
              ["feature", { featureName: "${from.featureName}" }],
            ],
          },
          {
            from: ["app", "neverImport"],
            allow: ["shared", "feature"],
          },
          {
            from: ["app"],
            allow: [["app", { fileName: "*.css" }]],
          },
        ],
      },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "drizzle/enforce-delete-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "ctx.db"],
      },
    ],
    "drizzle/enforce-update-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "ctx.db"],
      },
    ],
  },
  settings: {
    "boundaries/include": ["src/**/*"],
    "boundaries/elements": [
      {
        mode: "full",
        type: "shared",
        pattern: [
          "src/components/**/*",
          "src/config/**/*",
          "src/server/**/*",
          "src/hooks/**/*",
          "src/lib/**/*",
        ],
      },
      {
        mode: "full",
        type: "feature",
        capture: ["featureName"],
        pattern: ["src/features/*/**/*"],
      },
      {
        mode: "full",
        type: "app",
        capture: ["_", "fileName"],
        pattern: ["src/app/**/*"],
      },
      {
        mode: "full",
        type: "neverImport",
        pattern: ["src/*", "src/tasks/**/*"],
      },
    ],
  },
};
module.exports = config;

