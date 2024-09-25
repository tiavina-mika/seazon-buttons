import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const root = style({
  display: "flex",
  height: 32,
  padding: "8px 16px",
  alignItems: "center",
  gap: 4,
  flexShrink: 0,
  borderRadius: 999999,

  // text
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0.3,
});

export const center = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const closeButton = style([
  center,
  {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    marginLeft: 2,
    cursor: "pointer",
  },
]);

export const icon = style([
  center,
  {
    marginRight: 4,
  },
]);

export const variants = [
  "default",
  "dark",
  "primary",
  "secondary",
  "neutral",
  "default",
  "disabled",
];
// export const colorVariants = ['primary', 'secondary', 'success', 'warning', 'neutral', 'default', 'disabled'];

/**
 * Generate styles for each color variant
 * @param {*} theme
 * @param {*} color
 * @returns
 */
const generateTagVariants = (theme, color) => ({
  backgroundColor: theme.components.tag[color].background,
  color: theme.components.tag[color].color,
  "&:focus, &:focus-within, &:focus-visible": {
    border: "2px solid " + theme.components.tag[color].borderColor,
  },
  "&:hover": {
    backgroundColor: theme.components.tag[color].backgroundHover,
  },
});

// Variants for button styles
export const colorVariants = styleVariants({
  ...variants.reduce((acc, color) => {
    acc[color] = generateTagVariants(theme, color);
    return acc;
  }, {}),
});

export const neutralDisabled = style({
  border: "1px solid " + theme.components.tag.neutral.borderColorDisabled,
});
