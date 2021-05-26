import React, { FC } from "react";
import styled from "styled-components";

enum ALIGNMENTS {
  left,
  center,
  right,
}

interface ButtonGroupStyleProps {
  align: keyof typeof ALIGNMENTS;
}

const setAlignment = (align: string): string => {
  if (align === ALIGNMENTS[ALIGNMENTS.left]) {
    return "flex-start";
  }

  if (align === ALIGNMENTS[ALIGNMENTS.center]) {
    return "center";
  }

  if (align === ALIGNMENTS[ALIGNMENTS.right]) {
    return "flex-end";
  }

  return "";
};

const ButtonGroupWrapper = styled.div<ButtonGroupStyleProps>`
  display: inline-flex;
  justify-content: ${(props) => setAlignment(props.align)};
  width: 100%;
  align-items: center;

  div + div {
    margin-left: 0.25rem;
  }
`;

interface ButtonGroupProps {
  align: keyof typeof ALIGNMENTS;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, align }) => {
  return <ButtonGroupWrapper align={align}>{children}</ButtonGroupWrapper>;
};

export { ButtonGroup };
