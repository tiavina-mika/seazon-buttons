/**
 * theme to be used in the application
 */
import { createTheme } from "@vanilla-extract/css";
import { theme } from "./themeContract.css";

const colors = {
  neutral: {
    100: "#FFFFFF",
    200: "#F4F4F4",
    300: "#D9D9DA",
    400: "#BDBEC1",
    500: "#A0A3A9",
    600: "#828992",
    700: "#63717C",
    800: "#224853",
    900: "#003840",
  },
  orange: {
    100: "#FCF5EE",
    200: "#FFF0C6",
    300: "#FFE399",
    400: "#FFC84A",
    500: "#FFB020",
    600: "#FF7900",
    700: "#CF3C00",
    800: "#9E0200",
    900: "#6E0000",
  },
  green: {
    100: "#EFFAF3",
    200: "#CCEDD6",
    300: "#B5E3C9",
    400: "#88CEAE",
    500: "#56B393",
    600: "#32957C",
    700: "#227769",
    800: "#1B5F5B",
    900: "#003840",
  },
  yellow: {
    100: "#FDFBE9",
    200: "#FCF8C5",
    300: "#FBED8D",
    400: "#F7D93F",
    500: "#F3C71C",
    600: "#E3AF0F",
    700: "#C4870A",
    800: "#9C600C",
    900: "#814D12",
  },
};

const backgroundColor = {
  neutral: {
    light: colors.neutral[200],
    default: colors.neutral[100],
    dark: colors.neutral[900],
  },
  primary: {
    light: colors.yellow[200],
    default: colors.yellow[400],
    dark: colors.yellow[300],
  },
  secondary: {
    light: colors.green[200],
    default: colors.green[100],
    dark: colors.green[400],
  },
  tertiary: {
    light: colors.orange[300],
    default: colors.orange[100],
    dark: colors.orange[400],
  },
  success: {
    light: colors.green[100],
    default: colors.green[800],
    dark: colors.green[600],
  },
  warning: {
    light: colors.yellow[200],
    default: colors.yellow[500],
    dark: colors.yellow[300],
  },
  error: {
    light: colors.orange[700],
    default: colors.orange[700],
    dark: colors.orange[800],
  },
  disabled: {
    light: colors.yellow[300],
    default: colors.neutral[200],
    dark: colors.neutral[300],
  },
};

const backgroundColorHover = {
  neutral: {
    light: colors.neutral[300],
    default: colors.green[100],
    dark: colors.green[200],
  },
  primary: {
    light: colors.yellow[100],
    default: colors.yellow[500],
    dark: colors.yellow[400],
  },
  secondary: {
    light: colors.green[300],
    default: colors.green[200],
    dark: colors.green[500],
  },
  tertiary: {
    light: colors.orange[400],
    default: colors.orange[200],
    dark: colors.orange[500],
  },
  success: {
    light: colors.green[300],
    default: colors.green[900],
    dark: colors.green[700],
  },
  warning: {
    light: colors.yellow[300],
    default: colors.yellow[600],
    dark: colors.yellow[400],
  },
  error: {
    light: colors.orange[700],
    default: colors.orange[800],
    dark: colors.orange[900],
  },
};

const textColor = {
  neutral: {
    light: colors.neutral[600],
    default: colors.neutral[900],
    dark: colors.neutral[800],
    white: "#FFFFFF",
  },
  primary: {
    default: colors.green[200],
    dark: colors.yellow[400],
  },
  success: {
    light: colors.green[600],
    default: colors.green[800],
    dark: colors.green[700],
  },
  warning: {
    light: colors.yellow[600],
    default: colors.yellow[900],
    dark: colors.yellow[700],
  },
  error: {
    light: colors.orange[700],
    default: colors.orange[800],
    dark: colors.orange[900],
  },
  disabled: {
    light: colors.neutral[500],
    default: colors.neutral[600],
  },
};

const borderColor = {
  neutral: {
    light: colors.neutral[200],
    default: colors.neutral[300],
    dark: colors.neutral[900],
    white: "#FFFFFF",
  },
  primary: {
    light: colors.yellow[400],
    default: colors.green[200],
    dark: colors.orange[600],
  },
  success: {
    light: colors.green[500],
    default: colors.green[700],
    dark: colors.green[600],
  },
  warning: {
    light: colors.yellow[500],
    default: colors.yellow[700],
    dark: colors.yellow[600],
  },
  error: {
    light: colors.orange[700],
    default: colors.orange[800],
    dark: colors.orange[900],
  },
  disabled: {
    default: colors.neutral[300],
  },
};

const iconColor = {
  ...borderColor,
  neutral: {
    light: colors.neutral[400],
    default: colors.neutral[600],
    dark: colors.neutral[900],
    white: "#FFFFFF",
  },
  disabled: {
    default: colors.neutral[500],
  },
};

const palette = {
  background: backgroundColor,
  backgroundHover: backgroundColorHover,
  text: textColor,
  border: borderColor,
  icon: iconColor,
};

const shadows = {
  100: "0px 1px 1px 0px rgba(7, 57, 62, 0.10)",
  200: "0px 1px 5px 0px rgba(7, 57, 62, 0.25)",
  300: "0px 4px 11px 0px rgba(7, 57, 62, 0.15)",
  400: "0px 5px 25px 0px rgba(7, 57, 62, 0.15)",
  500: "0px 10px 40px 0px rgba(7, 57, 62, 0.15)",
};

const values = {
  colors,
  palette,
  shadows,
  components: {
    tag: {
      default: {
        background: palette.background.neutral.dark,
        color: palette.text.neutral.white,
        borderColor: palette.border.primary.default,
        backgroundHover: palette.backgroundHover.success.default,
      },
      dark: {
        background: palette.background.success.default,
        color: palette.text.neutral.white,
        borderColor: palette.border.neutral.dark,
        backgroundHover: palette.background.neutral.dark,
      },
      primary: {
        background: palette.background.secondary.light,
        color: palette.text.neutral.default,
        borderColor: palette.border.neutral.dark,
        backgroundHover: palette.backgroundHover.secondary.light,
      },
      secondary: {
        background: palette.background.tertiary.light,
        color: palette.text.neutral.default,
        borderColor: palette.border.neutral.dark,
        backgroundHover: palette.backgroundHover.tertiary.light,
      },
      neutral: {
        background: "#fff",
        color: palette.text.neutral.default,
        borderColor: palette.border.neutral.dark,
        backgroundHover: palette.backgroundHover.neutral.default,
        borderColorDisabled: palette.border.disabled.default,
      },
      light: {
        background: palette.background.tertiary.default,
        color: palette.text.neutral.default,
        borderColor: palette.border.neutral.dark,
        backgroundHover: palette.backgroundHover.tertiary.default,
      },
      disabled: {
        background: palette.background.disabled.default,
        color: palette.text.disabled.default,
        borderColor: "transparent",
        backgroundHover: palette.background.disabled.default,
      },
    },
    button: {
      default: {
        background: palette.background.primary.default,
        backgroundHover: palette.backgroundHover.primary.default,
      },
    },
  },
};

/*
 * used in high level components
 * called once in the application
 * to access the theme values for each styles, see ./themeV2.css.ts
 */
export const seazonTheme = createTheme(theme, values);
