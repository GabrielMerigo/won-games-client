module.exports = {
  "stories": ["../src/components/**/stories.tsx"],
  "addons": ["@storybook/addon-essentials"],
  "framework": "@storybook/react",
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config;
  },
}
