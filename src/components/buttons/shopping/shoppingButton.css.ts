import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/theme.css";
import { style } from "@vanilla-extract/css";
import {
  base,
  variants,
  defaultVariants,
  disabledCompountVariants,
} from "../buttonBase.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 6, // important
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 24, // important
});

export const value = style({
  minWidth: 12, // important
});

export const buttonVariants = recipe({
  base,
  variants: {
    ...variants,
    variant: {
      ...variants.variant,
      neutral: {
        border: "1px solid " + theme.components.button.neutral.border,
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
    size: {
      sm: {
        padding: "6px 7px",
        fontSize: 14,
      },
      md: {
        padding: "10px 11px",
        fontSize: 16,
      },
      lg: {
        padding: "14px 16px",
        fontSize: 16,
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    ...disabledCompountVariants,
    // loading state with different variants
    {
      variants: {
        loading: true,
        size: "md",
      },
      style: {
        padding: "10px 14px",
      },
    },
    {
      variants: {
        loading: true,
        size: "lg",
      },
      style: {
        padding: "10px 14px",
      },
    },
  ],

  defaultVariants,
});
