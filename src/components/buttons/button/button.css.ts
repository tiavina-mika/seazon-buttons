import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";

export const buttonVariants = recipe({
  base: {
    borderRadius: 999999,
    color: theme.palette.text.neutral.default,
    fontStyle: "normal",
    border: "2px solid transparent",
    fontWeight: 500,
    letterSpacing: 0.3,
    lineHeight: 1,
    gap: 8,
    display: "flex",
    alignItems: "center",
    "&:focus, &:focus-within, &:focus-visible": {
      border: "2px solid " + theme.palette.border.neutral.dark,
    },
  },

  variants: {
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
    size: {
      sm: {
        padding: "8px 12px",
        fontSize: 14,
      },
      md: {
        padding: "12px 24px",
        fontSize: 16,
      },
      lg: {
        padding: "16px 24px",
        fontSize: 16,
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        variant: "text",
        size: "sm",
      },
      style: {
        padding: "8px 4px",
      },
    },
    {
      variants: {
        variant: "text",
        size: "md",
      },
      style: {
        padding: "12px 8px",
      },
    },
    {
      variants: {
        variant: "text",
        size: "lg",
      },
      style: {
        padding: "16px",
      },
    },
    // disabled
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
    },
  ],

  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
  },
});
