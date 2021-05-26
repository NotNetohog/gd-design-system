export const typography = {
  type: {
    primary: '"Lato", "Helvetica Neue", Helvetica, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    light: "300",
    regular: "400",
    bold: "700",
  },
  size: {
    s1: "0.625rem",
    s2: "0.875rem",
    s3: "1rem",
    m1: "1.25rem",
    m2: "1.5rem",
    m3: "1.75rem",
    l1: "2rem",
    l2: "2.5rem",
    l3: "3rem",
  },
  lineHeight: {
    small: "1.875rem",
    standard: "3.0625rem",
    large: "3.6875rem",
  },
} as const;

export const color = {
  primary: "#2328EB",
  primarylight: "#23CCEB",
  primarydark: "#10126B",
  fontlight: "#FFFFFF",
  fontdark: "#131313",
  fontalternate: "#2328EB",
  secondary: "#FFFFFF",
  tertiary: "transparent",
  disabled: "#CCCCCC",
} as const;

export const border = {
  radius: "0.625rem",
};
