import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { baseThemeConfig } from "./baseTheme";
import { createTheme } from "@mui/material";
import { createMedia } from "@artsy/fresnel";

declare module "@mui/material" {
  interface Theme {
    fontLink: string;
    shape: {
      borderRadius: number;
      headerHeight: number;
    };
  }

  interface ThemeOptions {
    fontLink: string;
    shape: {
      borderRadius: number;
      headerHeight: number;
    };
  }
}

export const theme = createTheme({
  ...baseThemeConfig,
});

const fresnel = createMedia({
  breakpoints: theme.breakpoints.values,
});

export const mediaStyles = fresnel.createMediaStyle();
export const MediaContextProvider = fresnel.MediaContextProvider;
export const Media = fresnel.Media;
