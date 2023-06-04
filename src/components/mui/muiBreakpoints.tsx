import { createTheme, ThemeProvider } from "@mui/material/styles";

// Extend the existing breakpoints interface
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    sm_mobile: true;
    md_mobile: true;
    lg_mobile: true;
    tablet: true;
    sm_tablet: true;
    md_tablet: true;
    lg_tablet: true;
    laptop: true;
    lg_laptop: true;
    desktop: true;
    sm_desktop: true;
    md_desktop: true;
    lg_desktop: true;
    ultra_wide: true;
  }
}
const muiBreakpoints = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      sm_mobile: 320,
      md_mobile: 425,
      lg_mobile: 476,
      tablet: 550,
      sm_tablet: 640,
      md_tablet: 768,
      lg_tablet: 960,
      laptop: 1024,
      lg_laptop: 1280,
      desktop: 1366,
      sm_desktop: 1440,
      md_desktop: 1536,
      lg_desktop: 1920,
      ultra_wide: 2560,
    },
  },
});

export default muiBreakpoints;
