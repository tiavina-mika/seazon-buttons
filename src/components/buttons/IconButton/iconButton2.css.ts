import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";
import { disabledCompountVariants } from "../buttonBase.css";

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
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: disabledCompountVariants,
  // [
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
