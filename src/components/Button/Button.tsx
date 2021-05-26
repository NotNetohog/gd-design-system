import React, { FC } from "react";
import styled from "styled-components";
import { color, typography, border } from "../shared/styles";

enum VARIANTS {
  primary,
  secondary,
  tertiary,
}

enum SIZES {
  small,
  standard,
  large,
}

interface ButtonStyleProps {
  disabled: boolean;
  variant: keyof typeof VARIANTS;
  size: keyof typeof SIZES;
  hasIcon: boolean;
  stretch: boolean;
}

const setSize = (size: string): string => {
  let setLineHeight: string = "";
  let setPadding: string = "";
  let setFontSize: string = "";

  if (size === SIZES[SIZES.standard]) {
    setLineHeight = typography.lineHeight.standard;
    setPadding = "0 2.5rem";
    setFontSize = typography.size.s2;
  }
  if (size === SIZES[SIZES.small]) {
    setLineHeight = typography.lineHeight.small;
    setPadding = "0 1.25rem";
    setFontSize = typography.size.s1;
  }
  if (size === SIZES[SIZES.large]) {
    setLineHeight = typography.lineHeight.large;
    setPadding = "0 2.5rem";
    setFontSize = typography.size.s3;
  }
  return `line-height: ${setLineHeight};
          padding: ${setPadding};
          font-size: ${setFontSize};
          max-height: ${setLineHeight};`;
};

const setVariant = (variant: string, disabled: boolean): string => {
  let setBackground: string = "";
  let setColor: string = "";
  let setHoverBackground: string = "";
  let setHoverColor: string = "";
  let setActiveBackground: string = "";
  let setActiveColor: string = "";
  let setBorder: string = "";

  if (variant === VARIANTS[VARIANTS.primary]) {
    setBackground = disabled ? color.disabled : color.primary;
    setColor = disabled ? color.fontdark : color.fontlight;
    setHoverBackground = color.primarylight;
    setActiveBackground = color.primarydark;
    setBorder = `1px solid transparent`;
  }
  if (variant === VARIANTS[VARIANTS.secondary]) {
    setBackground = disabled ? color.disabled : color.secondary;
    setColor = disabled ? color.fontdark : color.fontalternate;
    setHoverBackground = color.primarylight;
    setActiveBackground = color.primarydark;
    setBorder = disabled
      ? `1px solid transparent`
      : `1px solid ${color.primary}`;
    setHoverColor = color.fontlight;
  }
  if (variant === VARIANTS[VARIANTS.tertiary]) {
    setBackground = color.tertiary;
    setColor = disabled ? color.disabled : color.fontalternate;
    setBorder = `1px solid transparent`;
    setHoverColor = color.primarylight;
    setActiveColor = color.primarydark;
  }
  return `background: ${setBackground};
          color: ${setColor};
          border: ${setBorder};
          :hover{
            :not([disabled]){
              background:${setHoverBackground};
              border: 1px solid transparent; 
              color: ${setHoverColor};
            }
          };
          :active{
            :not([disabled]){
              background:${setActiveBackground};
              border: 1px solid transparent;
              color: ${setActiveColor};
            }
          }`;
};

const ButtonWrapper = styled.div<ButtonStyleProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  justify-content: center;
  width: ${(props) => (props.stretch ? "fill-available;s" : "auto")};
  display: inline-flex;
  border-radius: ${border.radius};
  transition: all 0.2s ease-in-out;
  height: min-content;
  align-items: center;
  ${(props) => setSize(props.size)};
  ${(props) => setVariant(props.variant, props.disabled)};

  > div {
    ${(props) => (props.hasIcon ? "margin-right: 0.75rem" : "")};
  }
`;

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: keyof typeof VARIANTS;
  size: keyof typeof SIZES;
  icon?: React.ReactNode;
  stretch?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "standard",
  icon,
  stretch = false,
}) => {
  return (
    <ButtonWrapper
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      hasIcon={icon !== undefined}
      stretch={stretch}
    >
      <div>{icon}</div> {children}
    </ButtonWrapper>
  );
};
export { Button };
