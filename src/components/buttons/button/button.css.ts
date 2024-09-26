import { recipe } from "@vanilla-extract/recipes";
import {
  base,
  variants,
  defaultVariants,
  disabledCompountVariants,
} from "../buttonBase.css";

export const buttonVariants = recipe({
  base,
  variants,

  // Applied when multiple variants are set at once
  compoundVariants: [
    ...disabledCompountVariants,
    // size variants with text
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
