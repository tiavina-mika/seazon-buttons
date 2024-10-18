import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme.css";

// Wrapper for the switch
export const switchWrapper = style({
  display: "inline-block",
  position: "relative",
  width: 42,
  height: 24,
});

// Hide the checkbox visually
export const checkbox = style({
  opacity: 0,
  width: 0,
  height: 0,
});

// Slider style
export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#ccc",
  transition: ".4s",
  borderRadius: 18,
  ":before": {
    position: "absolute",
    content: '""',
    height: 18,
    width: 18,
    left: 3,
    bottom: 3,
    backgroundColor: "#fff",
    transition: ".4s",
    borderRadius: "50%",
  },
});

// Slider when active (checked)
export const sliderChecked = style({
  backgroundColor: theme.palette.background.primary.default,
  ":before": {
    transform: "translateX(99%)",
  },
});
