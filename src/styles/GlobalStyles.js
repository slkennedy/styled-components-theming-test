import { css, injectGlobal } from "styled-components";
// media query template
const breakpointSizes =  {
    xs: 0,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
}

export const media = Object.keys(breakpointSizes).reduce((accumulator, label) => {
    const emSize = breakpointSizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(...args)}
        }
    `
    return accumulator
}, {})

// spacing contants
export const spaces = {
    xxs: "0.3776rem",
    xs: "0.6110rem",
    s: "0.9888rem",
    base: "1.6rem",
    l: "2.5888rem",
    xl: "4.1886rem",
    xxl: "6.7772rem"
}

export const margin = {
    stackXXS: "0.3776rem 0 0 0",
    stackXS: "0.6110rem 0 0 0",
    stackS: "0.9888rem 0 0 0",
    stack: "1.6rem 0 0 0",
    stackL: "2.5888rem 0 0 0",
    stackXL: "4.1886rem 0 0 0",
    stackXXL: "6.7772rem 0 0 0",
    inlineXXS: "0 0.3776rem 0 0",
    inlineXS: "0 0.6110rem 0 0",
    inlineS: "0 0.9888rem 0 0",
    inline: "0 1.6rem 0 0",
    inlineL: "0 2.5888rem 0 0",
    inlineXL: "0 4.1886rem 0 0",
    inlineXXL: "0 6.7772rem 0 0",
}

export const padding = {
    insetXXS: "0.3776rem",
    insetXS: "0.6110rem",
    insetS: "0.9888rem",
    inset: "1.6rem",
    insetL: "2.5888rem",
    insetXL: "4.1886rem",
    insetXXL: "6.7772rem",
    insetSquishXXS: "0.3776rem 0.6110rem",
    insetSquishXS: "0.6110rem 0.9888rem",
    insetSquishS: "0.9888rem 1.6rem",
    insetSquish: "1.6rem 2.5888rem",
    insetSquishL: "2.5888rem 4.1886rem",
    insetSquishXL: "4.1886rem 6.7772rem",
    insetSquishXXL: "6.7772rem 8.0rem",
}

// color constants
const colors = {
    goldDark: "#F8B532",
    gold: "#FAC832",
    goldLight: "#F5E1A5",
    skyBlueDark: "#0067AD",
    skyBlue: "#0376BB",
    skyBlueLight: "#92C0DC",
    slateDark: "#4D6273",
    slate: "#5A7184",
    slateLight: "#A6B2BB",
    white: "#fff",
    black: "#000",
}

// theme variables - only colors at the moment, could be more
export const themeColors = {
    themeBase: `${colors.white}`,
    themeBase2: `${colors.slateLight}`,
    themeBase3: `${colors.slate}`,
    themeBase4: `${colors.slateDark}`,
    themePrimary: `${colors.skyBlue}`,
    themePrimary2: `${colors.skyBlueDark}`,
    themePrimary3: `${colors.skyBlueLight}`,
    themeAction: `${colors.gold}`,
    themeAction2: `${colors.goldDark}`,
    themeAction3: `${colors.goldLight}`,
    themeActionSecondary: `${colors.skyBlueDark}`,
    themeActionSecondary2: `${colors.skyBlue}`,
    themeActionSecondary3: `${colors.skyBlueLight}`,
    themeTextPrimary: `${colors.black}`,
    themeTextInverse: `${colors.white}`,
}


// global level styles
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=BioRhyme:300,400,700|Poppins:300,400');
    
    // not working....
    // @import "../../node_modules/normalize.css/normalize";
    // @import "../../node_modules/bootstrap/scss/bootstrap.scss";

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        height: 100%;
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }

    body {
        background-color: ${themeColors.themeBase};
        font-family: "BioRhyme";
        font-size: 1.8rem;
        font-weight: 300;
        margin: 0;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        min-height: 100%;

        * {
            margin-bottom: 0;
        }
    }

    h1 {
        font-family: "Poppins";
        margin: ${margin.stack};
    }

    p {
        margin: ${margin.stack};
    }
`
