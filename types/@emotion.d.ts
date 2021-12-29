import { Theme as StyledTheme, ThemedProps, ThemeOptions } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

declare module "@emotion/react" {
  export interface Theme extends StyledTheme {}
}
