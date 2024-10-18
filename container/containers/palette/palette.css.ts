import { style } from "@vanilla-extract/css";

export const cols = style({
  display: "flex",
  gap: 12,
});

export const col = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
});
