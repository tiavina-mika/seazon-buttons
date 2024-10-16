import { style, styleVariants } from "@vanilla-extract/css";

export const icon = style({
  display: 'inline-block',
  '&:hover': {
    opacity: 0.8,
  },
  '&[role="button"]': {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const iconButton = style({
  cursor: 'pointer',
});

// Variants for button styles
export const sizeVariants = styleVariants({
  xs: {
    width: 16,
    height: 16,
  },
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
});
