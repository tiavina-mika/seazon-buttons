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
  gap: 8,
});

export const buttonVariants = recipe({
  base,
  variants,

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
