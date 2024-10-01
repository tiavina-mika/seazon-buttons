import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme.css";

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 999999,
  width: 368,
  height: 48,
});

export const button = style({
  borderRadius: 999999,
  alignSelf: "stretch",
  flex: 1,
  // inactive bar
  backgroundColor: theme.palette.background.primary.dark,
  overflow: "hidden",
  position: "relative",
  border: "none",
  padding: 0,
});

export const buttonEnabled = style({
  cursor: "pointer",
});

export const progressBar = style({
  height: "100%",
  // active bar
  backgroundColor: theme.palette.background.primary.default,
  transition: "width 0.3s ease",
});

export const text = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
});

export const textDisabled = style({
  color: theme.palette.text.disabled.default,
});

export const textEnabled = style({
  color: theme.palette.text.neutral.default,
});
