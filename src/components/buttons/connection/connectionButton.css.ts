import { theme } from "../../../styles/theme.css";
import { style } from "@vanilla-extract/css";
// import {
//   base,
//   variants,
//   defaultVariants,
//   disabledCompountVariants,
// } from "../connexionButton.css";

export const root = style({
  display: "flex",
  width: "352px",
  height: "48px",
  padding: 24,
  // justifyContent: 'center',
  alignItems: "center",
  gap: 8,
  flexShrink: 0,
  border: "1px solid " + theme.palette.border.neutral.dark,
  borderRadius: 999999,
  backgroundColor: "#fff",
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 24, // important
});

export const content = style({
  flex: 1,
});
