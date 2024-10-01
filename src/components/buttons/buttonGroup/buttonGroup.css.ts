import { styleVariants } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  gap: 16,
});

export const directionVariant = styleVariants({
  row: [base],
  column: [
    base,
    {
      flexDirection: "column",
      alignItems: "center",
    },
  ],
});

export const spacingVariant = styleVariants({
  justify: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
  },
});

export const activeButton = style({
  order: -1,
});

export const buttonInColumn = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
