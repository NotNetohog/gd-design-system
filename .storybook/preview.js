import React from "react";
import { loadFontsForStorybook } from "../src/utils/index";

import { GlobalStyle } from "../src/components/shared/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  withStoriesOnly: true,
  hideEmpty: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Properties",
        "Components",
        ["Buttons/Properties", "Overview", "Variations"],
      ],
    },
  },
};

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

loadFontsForStorybook();
