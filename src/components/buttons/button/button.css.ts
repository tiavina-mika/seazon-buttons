import { recipe } from "@vanilla-extract/recipes";
import {
  base,
  variants,
  defaultVariants,
  disabledCompountVariants,
} from "../buttonBase.css";
import { theme } from "../../../styles/theme.css";

export const buttonVariants = recipe({
  base,
  variants: {
    ...variants,
    variant: {
      ...variants.variant,
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
    }
  },

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
