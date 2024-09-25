import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";

export const buttonVariants = recipe({
  base: {
    borderRadius: 999999,
    color: theme.palette.text.neutral.default,
    fontStyle: "normal",
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
          border:
            "2px solid " + theme.components.button.default.backgroundHover,
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
    // {
    //   variants: {
    //     color: "neutral",
    //     size: "large",
    //   },
    //   style: {
    //     background: "ghostwhite",
    //   },
    // },
  ],

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
