import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      blue: string;
      gray: {
        20: string;
        10: string;
        0: string;
      };
      white: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
