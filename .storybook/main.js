module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "webpack5"
  }
}