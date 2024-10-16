import { style } from "@vanilla-extract/css";
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
  fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
  "&:focus, &:focus-within, &:focus-visible": {
    border: "2px solid " + theme.palette.border.neutral.dark,
  },
  cursor: "pointer",
});

export const buttonText = style({
  fontWeight: 500,
  letterSpacing: 0.3,
  lineHeight: 1,
  fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
  fontSize: 16,
});

export const variants = {
  variant: {
    default: {
      backgroundColor: theme.components.button.default.background,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.components.button.default.backgroundHover,
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
  loading: {
    true: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  size: {
    sm: {
      padding: "6px 12px",
      fontSize: 14,
    },
    md: {
      padding: "10px 24px",
      fontSize: 16,
    },
    lg: {
      padding: "14px 24px",
      fontSize: 16,
    },
  },
};
