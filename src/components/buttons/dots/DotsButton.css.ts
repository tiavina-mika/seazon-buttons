import { theme } from "../../../styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  width: "352px",
  height: "48px",
  padding: 24,
  position: "relative",
  // justifyContent: 'center',
  alignItems: "center",
  // gap: 8,
  // flexShrink: 0,
  border: "1px solid " + theme.palette.border.neutral.dark,
  // borderRadius: 999999,
  backgroundColor: "#fff",
  cursor: "pointer",
  fontSize: 16,
  "&:focus, &:focus-within, &:focus-visible": {
    border: "2px solid " + theme.palette.border.neutral.dark,
  },
  "&:hover": {
    border: "1px solid " + theme.palette.border.neutral.dark,
    backgroundColor: theme.palette.backgroundHover.primary.default,
  },
});

export const button = style({
  height: 8,
  width: 8,
});
export const activeButton = style({
  borderRadius: 999999,
  backgroundColor: theme.palette.icon.neutral.dark,
  width: 20,
  height: 8,
});
