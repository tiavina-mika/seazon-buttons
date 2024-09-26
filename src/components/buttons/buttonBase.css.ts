import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const base = style({
  borderRadius: 999999,
  color: theme.palette.text.neutral.default,
  fontStyle: "normal",
  border: "2px solid transparent",
  fontWeight: 500,
  letterSpacing: 0.3,
  lineHeight: 1,
  gap: 8,
  display: "inline-flex",
  alignItems: "center",
  height: "auto",
  fontFamily: 'Neue-Haas-Grotesk-Text-Pro-Roman',
  "&:focus, &:focus-within, &:focus-visible": {
    border: "2px solid " + theme.palette.border.neutral.dark,
  },
});

export const defaultVariants = {
  variant: {
    default: {
      backgroundColor: theme.components.button.default.background,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.components.button.default.backgroundHover,
      },
    },
    neutral: {
      border: "1px solid transparent",
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: theme.components.button.neutral.background,
      "&:hover": {
        cursor: "pointer",
        border: "1px solid " + theme.components.button.neutral.border,
        backgroundColor: theme.components.button.neutral.backgroundHover,
      },
    },
    text: {
      textDecoration: "underline",
      backgroundColor: theme.components.button.text.background,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.components.button.text.backgroundHover,
      },
    },
  },
  disabled: {
    true: {
      color: theme.palette.text.disabled.light,
      "&:hover": {
        cursor: "none",
      },
    },
  },
}