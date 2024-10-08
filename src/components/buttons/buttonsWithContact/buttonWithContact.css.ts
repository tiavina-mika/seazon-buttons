import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  paddingTop: 30,
  width: 352,
  "@media": {
    "screen and (min-width: 768px)": {
      paddingTop: 50,
    },
  },
});

export const contactButton = style({
  position: "absolute",
  backgroundColor: "transparent",
  padding: 0,
  border: "none",
  right: 4,
  top: 0,
  zIndex: 1000,
});

export const button = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const shoppingButton = style({
  display: "flex",
  justifyContent: "center",
  gap: 50,
});

export const progressBarButton = style({
  width: "100%",
});
