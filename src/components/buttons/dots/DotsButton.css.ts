import { theme } from "../../../styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: 5,
});

export const button = style({
  height: 8,
  borderRadius: 999999,
  cursor: "pointer",
});

export const inactiveButton = style([
  button,
  {
    backgroundColor: theme.palette.icon.neutral.default,
    width: 8,
    opacity: 0.5,
  },
]);

export const activeButton = style([
  button,
  {
    backgroundColor: theme.palette.icon.neutral.dark,
    width: 20,
  },
]);
