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

export const variants = {
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
      // height: 32,
    },
    md: {
      padding: "10px 24px",
      fontSize: 16,
      // height: 40,
    },
    lg: {
      padding: "14px 24px",
      fontSize: 16,
      // height: 48,
    },
  },
};

export const disabledCompountVariants = [
  {
    variants: {
      variant: "default",
      disabled: true,
    },
    style: {
      backgroundColor: theme.components.button.default.backgroundDisabled,
      "&:hover": {
        backgroundColor: theme.components.button.default.backgroundDisabled,
      },
    },
  },
  {
    variants: {
      variant: "neutral",
      disabled: true,
    },
    style: {
      backgroundColor: theme.components.button.neutral.backgroundDisabled,
      borderColor: theme.palette.border.disabled.default,
      "&:hover": {
        backgroundColor: theme.components.button.neutral.backgroundDisabled,
        borderColor: theme.palette.border.disabled.default,
      },
    },
  },
  {
    variants: {
      variant: "text",
      disabled: true,
    },
    style: {
      backgroundColor: theme.components.button.text.backgroundDisabled,
      "&:hover": {
        backgroundColor: theme.components.button.text.backgroundDisabled,
      },
    },
  }
];

export const defaultVariants = {
  variant: "default",
  size: "md",
  disabled: false,
  loading: false,
}