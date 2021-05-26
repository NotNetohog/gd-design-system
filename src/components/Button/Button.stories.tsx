import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Components/Buttons/All Stories",
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

const IgnoreTemplate = () => {};

export const Ignore = IgnoreTemplate.bind({});

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => (
  <div style={{ textAlign: "center" }}>
    <Button {...args} size="standard" variant="primary">
      Primary Button
    </Button>
  </div>
);

export const PrimaryButton = PrimaryButtonTemplate.bind({});

const SecondaryButtonTemplate: Story<ButtonProps> = (args) => (
  <div style={{ textAlign: "center" }}>
    <Button {...args} size="standard" variant="secondary">
      Secondary Button
    </Button>
  </div>
);

export const SecondaryButton = SecondaryButtonTemplate.bind({});

const TertiaryButtonTemplate: Story<ButtonProps> = (args) => (
  <div style={{ textAlign: "center" }}>
    <Button {...args} size="standard" variant="tertiary">
      Tertiary Button
    </Button>
  </div>
);

export const TertiaryButton = TertiaryButtonTemplate.bind({});

const PrimaryStatesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="primary">
      Primary Idle
    </Button>
    <Button {...args} size="standard" variant="primary" disabled>
      Primary Disabled
    </Button>
  </ButtonGroup>
);

export const PrimaryStates = PrimaryStatesTemplate.bind({});

const PrimarySizesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="large" variant="primary">
      Button Text
    </Button>
    <Button {...args} size="standard" variant="primary">
      Button Text
    </Button>
    <Button {...args} size="small" variant="primary">
      Button Text
    </Button>
  </ButtonGroup>
);

export const PrimarySizes = PrimarySizesTemplate.bind({});

const SecondaryStatesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="secondary">
      Secondary Idle
    </Button>
    <Button {...args} size="standard" variant="secondary" disabled>
      Secondary Disabled
    </Button>
  </ButtonGroup>
);

export const SecondaryStates = SecondaryStatesTemplate.bind({});

const SecondarySizesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="large" variant="secondary">
      Button Text
    </Button>
    <Button {...args} size="standard" variant="secondary">
      Button Text
    </Button>
    <Button {...args} size="small" variant="secondary">
      Button Text
    </Button>
  </ButtonGroup>
);

export const SecondarySizes = SecondarySizesTemplate.bind({});

const TertiaryStatesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="tertiary">
      Tertiary Idle
    </Button>
    <Button {...args} size="standard" variant="tertiary" disabled>
      Tertiary Disabled
    </Button>
  </ButtonGroup>
);

export const TertiaryStates = TertiaryStatesTemplate.bind({});

const TertiarySizesTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="large" variant="tertiary">
      Button Text
    </Button>
    <Button {...args} size="standard" variant="tertiary">
      Button Text
    </Button>
    <Button {...args} size="small" variant="tertiary">
      Button Text
    </Button>
  </ButtonGroup>
);

export const TertiarySizes = TertiarySizesTemplate.bind({});

const IconTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="primary" icon={<>🚀</>}>
      Primary Icon
    </Button>
    <Button {...args} size="standard" variant="secondary" icon={<>🚀</>}>
      Secondary Icon
    </Button>
    <Button {...args} size="standard" variant="tertiary" icon={<>🚀</>}>
      Tertiary Icon
    </Button>
  </ButtonGroup>
);

export const IconButtons = IconTemplate.bind({});

const StretchedTemplate: Story<ButtonProps> = (args) => (
  <Button {...args} size="standard" variant="primary" stretch>
    Stretched Primary Button
  </Button>
);

export const StretchedButton = StretchedTemplate.bind({});

const PrimaryGroupsTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="primary">
      Primary Button
    </Button>
    <Button {...args} size="standard" variant="secondary">
      Secondary Button
    </Button>
  </ButtonGroup>
);

export const PrimaryGroups = PrimaryGroupsTemplate.bind({});

const SecondaryGroupsTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="secondary">
      Secondary Button
    </Button>
    <Button {...args} size="standard" variant="secondary">
      Secondary Button
    </Button>
  </ButtonGroup>
);

export const SecondaryGroups = SecondaryGroupsTemplate.bind({});

const TertiaryGroupsTemplate: Story<ButtonProps> = (args) => (
  <ButtonGroup align="center">
    <Button {...args} size="standard" variant="tertiary">
      Tertiary Button
    </Button>
    <Button {...args} size="standard" variant="tertiary">
      Tertiary Button
    </Button>
  </ButtonGroup>
);

export const TertiaryGroups = TertiaryGroupsTemplate.bind({});
