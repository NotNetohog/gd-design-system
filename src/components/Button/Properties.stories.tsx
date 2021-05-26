import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Buttons/Properties",
  component: Button,
  argTypes: { onClick: { action: "click " } },
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "jsx",
      },
      description: {
        component:
          "Buttons can be used to show the user’s choice of options for actions and assign these to a clear hierarchy.",
      },
    },
  },
} as Meta;

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => (
  <div style={{ textAlign: "center" }}>
    <Button {...args} size="standard" variant="primary">
      Primary Button
    </Button>
  </div>
);

export const Properties = PrimaryButtonTemplate.bind({});
