import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: 3,
});

export const row = style({
  display: "flex",
  gap: 4,
});
