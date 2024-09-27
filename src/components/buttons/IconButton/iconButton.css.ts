import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";

export const buttonVariants = recipe({
  base: {
    borderRadius: 6,
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
    },
    disabled: {
      true: {
        color: theme.palette.text.disabled.light,
        "&:hover": {
          cursor: "none",
        },
      },
    },
  },

  // Applied when multiple variants are set at once
  // compoundVariants: [
  //   {
  //     variants: {
  //       color: "neutral",
  //       size: "large",
  //     },
  //     style: {
  //       background: "ghostwhite",
  //     },
  //   },
  // ],

  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});
