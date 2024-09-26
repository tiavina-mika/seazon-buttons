import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: 3,
});

const row = style({
  display: "flex",
  alignItems: 'center',
});

export const buttons = style([
  row,
  { gap: 8 },
]);

export const section = style([
  row,
  { gap: 22 },
]);
