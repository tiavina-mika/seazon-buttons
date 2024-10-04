import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  height: 32,
  padding: "8px 16px",
  alignItems: "center",
  gap: 4,
  flexShrink: 0,
  borderRadius: 999999,

  // text
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0.3,
});
