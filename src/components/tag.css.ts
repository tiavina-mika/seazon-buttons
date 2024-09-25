import { style } from "@vanilla-extract/css";
import { theme } from "../styles/theme.css";

export const root = style({
  backgroundColor: theme.components.tag.primary.background,
});
