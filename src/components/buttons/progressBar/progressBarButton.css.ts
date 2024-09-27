// import { recipe } from "@vanilla-extract/recipes";
// import {
//   base,
//   variants,
//   defaultVariants,
//   disabledCompountVariants,
// } from "../buttonBase.css";
import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme.css";

// export const button = style({
//   // borderRadius: 999999,
//   color: theme.palette.text.neutral.default,
//   fontStyle: "normal",
//   // border: "2px solid transparent",
//   // width: 368,
//   // height: 48,
//   fontWeight: 500,
//   letterSpacing: 0.3,
//   lineHeight: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
// });

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 999999,
  width: 368,
  height: 48,
});

// export const button = style({
//   padding: '10px 20px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   marginBottom: '10px',
//   ':disabled': {
//     backgroundColor: '#ddd',
//     cursor: 'not-allowed',
//   },
// });

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

  // Text
  fontWeight: 500,
  letterSpacing: 0.3,
  lineHeight: 1,
  fontFamily: "Neue-Haas-Grotesk-Text-Pro-Roman",
  fontSize: 16,
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
