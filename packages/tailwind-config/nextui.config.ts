import { NextUIPluginConfig } from "@nextui-org/react";

export default {
  defaultTheme: "light",
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#FB5607",
          foreground: "#ffffff",
        },
        danger: {
          DEFAULT: "#991b1b",
          foreground: "#fef2f2",
        },
        warning: {
          DEFAULT: "#fed7aa",
          foreground: "#7c2d12",
        },
        success: {
          DEFAULT: "#bbf7d0",
          foreground: "#14532d",
        },
        secondary: {
          DEFAULT: "#bfdbfe",
          foreground: "#1e3a8a",
        },
        content1: "#FAFAFA",
        content2: "#FFFFFF",
        content3: "#FFFFFF",
      },
    },
    dark: {
      colors: {
        background: "#212125",
        // background: '#010409',
        primary: {
          DEFAULT: "#aa3f0c",
          foreground: "#ffffff",
        },
        default: {
          50: "#0F0F10",
          100: "#18181B",
          200: "#212125",
        },
        content1: "#212125",
        content2: "#18181B",
        content3: "#0F0F10",
      },
    },
  },
} satisfies NextUIPluginConfig;
