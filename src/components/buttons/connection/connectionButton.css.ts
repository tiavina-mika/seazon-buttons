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

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 24,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const content = style({
  flex: 1,
});

export const disabled = style({
  backgroundColor: theme.palette.background.disabled.light,
  color: theme.palette.text.disabled.default,
});
