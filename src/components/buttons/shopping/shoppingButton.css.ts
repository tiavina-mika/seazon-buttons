import { recipe } from "@vanilla-extract/recipes";
// import { theme } from "../../../styles/theme.css";
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
  gap: 12, // important
});

export const buttonVariants = recipe({
  base,
  variants: {
    ...variants,
    size: {
      sm: {
        padding: "6px 12px",
        fontSize: 14,
      },
      md: {
        padding: "10px 16px",
        fontSize: 16,
      },
      lg: {
        padding: "14px 10px",
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
        width: 48,
      },
    },
    {
      variants: {
        loading: true,
        size: "lg",
      },
      style: {
        width: 72,
      },
    },
  ],

  defaultVariants,
});
