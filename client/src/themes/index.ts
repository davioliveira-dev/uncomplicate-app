import { createStitches } from "@stitches/react";

const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      black: "#1d1f20",
      blue: "#83e4e2",
      green: "#a2ed56",
      yellow: "#fddc32",
      white: "#fafafa",
      listItemBackground: "linear-gradient(135deg, $blue 0%, $green 100%)",
      background: "rgb(51, 51, 51)",
    },
    fonts: {
      primary: '"Raleway", sans-serif',
      secondary: '"Montserrat", sans-serif',
    },
    radii: {
      default: "0 0.5rem 0.5rem 0.5rem",
      listItemRadii: "1rem 1rem 0 1rem",
      md: "0.5rem",
    },
    shadows: {
      default:
        "0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05)",
    },
  },
  media: {
    bpTablet: "(max-width: 768px)",
  },
});

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: "$primary",
    background: "$background",
  },
});

export { styled, globalStyles };
