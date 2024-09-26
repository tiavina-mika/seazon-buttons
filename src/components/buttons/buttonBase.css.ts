import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const base = style({
  borderRadius: 999999,
  color: theme.palette.text.neutral.default,
  fontStyle: "normal",
  border: "2px solid transparent",
  fontWeight: 500,
  letterSpacing: 0.3,
  lineHeight: 1,
  gap: 8,
  display: "inline-flex",
  alignItems: "center",
  height: "auto",
  fontFamily: 'Neue-Haas-Grotesk-Text-Pro-Roman',
  "&:focus, &:focus-within, &:focus-visible": {
    border: "2px solid " + theme.palette.border.neutral.dark,
  },
});
