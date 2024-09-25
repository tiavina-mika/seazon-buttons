import { createTheme } from "@vanilla-extract/css";
import { theme } from "./themeContract.css";

export const seazonTheme = createTheme(theme, {
  color: {
    brand: "red",
  },
  font: {
    body: "helvetica",
  },
});
