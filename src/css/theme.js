export const theme = {
  colors: {
    darkblue: "#121a20",
    lightblue: "#39bae9",

    lightgrey: "#cef",
    darkgrey: "#080808",

    white: "#fff",
    black: "#000",
    transparent: "transparent"
  },
  font(family, weight, style) {
    return `
        font-family: ${family}, sans-serif;
        ${weight ? `font-weight: ${weight}` : ``};
        ${style ? `font-style: ${style}` : ``};
    `;
  },
  breakpoints: [
    {
      keyword: "landscape",
      value: 480
    },
    {
      keyword: "tablet",
      value: 768
    },
    {
      keyword: "desktop-small",
      value: 900
    },
    {
      keyword: "desktop-large",
      value: 1200
    },
    {
      keyword: "super-large",
      value: 1650
    }
  ],
  media(breakpointName, type = "min") {
    // eslint-disable-next-line
    return theme.breakpoints.map((breakpoint, i) => {
      if (breakpointName === breakpoint.keyword)
        return `@media (${type}-width: ${theme.breakpoints[i].value -
          (type === "min" ? 0 : 1)}px)`;
    });
  }
};
