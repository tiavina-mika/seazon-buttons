import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";

export const iconButtonVariants = recipe({
  base: {
    borderRadius: "50%",
    height: 48,
    width: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: theme.components.button.default.background,
        "&:focus, &:focus-within, &:focus-visible": {
          border: "2px solid " + theme.palette.border.neutral.dark,
        },
        "&:hover": {
          backgroundColor: theme.components.button.default.backgroundHover,
        },
      },
      neutral: {
        backgroundColor: theme.components.button.neutral.background,
        "&:hover": {
          backgroundColor: theme.components.button.text.backgroundHover,
        },
      },
    },
    disabled: {
      true: {
        "&:hover": {
          cursor: "none",
        },
        "& img": {
          opacity: 0.7,
        },
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
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
  ],

  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});
