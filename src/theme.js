import { themeColor, themeColorDark, backgroundColor } from "../config/website"

// https://theme-ui.com/theming#example
const heading = {
  fontFamily: "heading",
}

const lists = {
  paddingLeft: "1.1rem",
}

export const theme = {
  initialColorMode: "light",

  colors: {
    text: "#000",
    background: backgroundColor,
    primary: themeColor,
    gray: ["#efefef", "#ddd", "#333", "#111"],
    highlight: "#ffd",
    accent: "#000",

    modes: {
      dark: {
        primary: themeColorDark,
        text: "#ffffffe0",
        accent: "#000",
        // from overreacted.io
        background: "#282c35",
        highlight: "#737c9933",
        // background: "#222",
        // Used https://pinetools.com/invert-color
        gray: ["#101010", "#222222", "#cccccc", "#eeeeee"],
      },
    },
  },

  sizes: { default: "100vw" },
  breakpoints: ["375px", "768px", "1024px"],

  // prettier-ignore
  //          0   1   2   3   4   5   6    7    8
  space:     [0,  4,  8,  16, 32, 64, 128, 256, 512],
  // prettier-ignore
  fontSizes: [12, 14, 16, 20, 24, 32, 48,  64,  96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fonts: {
    heading: `"Ropa Sans", sans-serif`,
    body: `"Open Sans", sans-serif`,
    monospace: "Menlo, monospace",
  },
  images: {
    banner: {
      width: 600,
      height: 400,
    },
  },
  lineHeights: {
    body: "1.7rem",
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },

    Layout: { fontFamily: "body" },
    Header: { fontFamily: "heading" },
    h1: {
      ...heading,
      fontSize: 8,
      marginBottom: 3,
    },
    h2: {
      ...heading,
      fontSize: 4,
      marginTop: 4,
      marginBottom: 3,
    },
    h3: {
      ...heading,
      fontSize: 3,
      marginTop: 2,
      marginBottom: 2,
    },
    h4: {
      ...heading,
      fontSize: 2,
      marginBottom: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
      marginBottom: 2,
    },
    h6: {
      ...heading,
      fontSize: 0,
      marginBottom: 2,
    },

    blockquote: {
      padding: 3,
      marginBottom: 3,
      backgroundColor: "highlight",
      borderRadius: 1,
      borderLeft: t => `8px solid ${t.colors.primary}`,
      // color: t => t.colors.accent,
      color: "text",
    },

    ul: { ...lists },
    ol: { ...lists },
    img: {
      width: "100%",
    },
    p: {
      paddingBottom: 3,
    },
    paddingTop: [3, 3, 4, 4],
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}
