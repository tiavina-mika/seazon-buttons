/**
 * this is a theme contract for themes
 * so all the themes will have the same structure
 */
import { createThemeContract } from "@vanilla-extract/css";

const colors = {
  neutral: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  orange: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  green: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  yellow: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
};

export const backgroundColor = {
  neutral: {
    light: null,
    default: null,
    dark: null,
  },
  primary: {
    light: null,
    default: null,
    dark: null,
  },
  secondary: {
    light: null,
    default: null,
    dark: null,
  },
  tertiary: {
    light: null,
    default: null,
    dark: null,
  },
  success: {
    light: null,
    default: null,
    dark: null,
  },
  warning: {
    light: null,
    default: null,
    dark: null,
  },
  error: {
    light: null,
    default: null,
    dark: null,
  },
  disabled: {
    light: null,
    default: null,
    dark: null,
  },
};

const backgroundColorHover = {
  neutral: {
    light: null,
    default: null,
    dark: null,
  },
  primary: {
    light: null,
    default: null,
    dark: null,
  },
  secondary: {
    light: null,
    default: null,
    dark: null,
  },
  tertiary: {
    light: null,
    default: null,
    dark: null,
  },
  success: {
    light: null,
    default: null,
    dark: null,
  },
  warning: {
    light: null,
    default: null,
    dark: null,
  },
  error: {
    light: null,
    default: null,
    dark: null,
  },
};

const textColor = {
  neutral: {
    light: null,
    default: null,
    dark: null,
    white: null,
  },
  primary: {
    default: null,
    dark: null,
  },
  success: {
    light: null,
    default: null,
    dark: null,
  },
  warning: {
    light: null,
    default: null,
    dark: null,
  },
  error: {
    light: null,
    default: null,
    dark: null,
  },
  disabled: {
    light: null,
    default: null,
  },
};

const borderColor = {
  neutral: {
    light: null,
    default: null,
    dark: null,
    white: null,
  },
  primary: {
    light: null,
    default: null,
    dark: null,
  },
  success: {
    light: null,
    default: null,
    dark: null,
  },
  warning: {
    light: null,
    default: null,
    dark: null,
  },
  error: {
    light: null,
    default: null,
    dark: null,
  },
  disabled: {
    default: null,
  },
};

const iconColor = {
  ...borderColor,
  neutral: {
    light: null,
    default: null,
    dark: null,
    white: null,
  },
  disabled: {
    default: null,
  },
};

const shadows = {
  100: null,
  200: null,
  300: null,
  400: null,
  500: null,
};

/**
 * use the contract in each style instead of the theme itself
 * @example style({ color: theme.colors.primary.default })
 */
export const theme = createThemeContract({
  colors,
  palette: {
    background: backgroundColor,
    backgroundHover: backgroundColorHover,
    text: textColor,
    border: borderColor,
    icon: iconColor,
  },
  shadows,
  components: {
    tag: {
      default: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
      dark: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
      primary: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
      secondary: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
      neutral: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
        borderColorDisabled: null,
      },
      light: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
      disabled: {
        background: null,
        color: null,
        borderColor: null,
        backgroundHover: null,
      },
    },
    button: {
      default: {
        background: null,
        backgroundHover: null,
        border: null,
        backgroundDisabled: null,
      },
      neutral: {
        background: null,
        backgroundHover: null,
        border: null,
        backgroundDisabled: null,
      },
      text: {
        background: null,
        backgroundHover: null,
        border: null,
        backgroundDisabled: null,
      },
    },
  },
});
