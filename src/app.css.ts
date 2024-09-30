import { style } from "@vanilla-extract/css";
import { theme } from "./styles/theme.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: 3,
});

export const container = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const row = style({
  display: "flex",
  alignItems: "center",
});

export const tabs = style([
  row,
  {
    marginBottom: 4,
  },
]);

export const tab = style([
  row,
  {
    fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
    textTransform: "capitalize",
    border: "none",
    background: "none",
    padding: "8px 18px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  },
]);

export const activeTab = style({
  borderBottom: "2px solid " + theme.palette.background.secondary.dark,
  color: theme.palette.background.secondary.dark,
  fontWeight: 600,
});

export const panel = style({
  alignSelf: "stretch",
  flex: 1,
  padding: 8,
});

export const connection = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});
