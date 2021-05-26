module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
  ],
  refs: {
    "gd-storybook": {
      title: "gd storybook",
      url: "http://gd-storybook.s3-website-sa-east-1.amazonaws.com",
    },
  },
};
