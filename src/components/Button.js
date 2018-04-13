import styled from "styled-components";
// import theme from "styled-theming";
// import PropTypes from "prop-types";
import { media, themeColors } from "../styles/GlobalStyles";

// One option for handling components with variations
// this uses the styled-theming and prop-types packages
// const buttonVariantStyles = {
//     backgroundColor: theme.variants("mode", "variant", {
//         primary: { main: `${themeColors.themeAction}` },
//         secondary: { main: `${themeColors.themePrimary}` }
//     }), 
//     textColor: theme.variants("mode", "variant", {
//         primary: { main: `${themeColors.themeTextPrimary}` },
//         secondary: { main: `${themeColors.themeTextInverse}` }
//     })
// }
  
// const Button = styled.button`
//     background-color: ${buttonVariantStyles.backgroundColor};
//     border: none;
//     border-radius: 5px;
//     color: ${buttonVariantStyles.textColor};
//     font-size: 1.4rem;
//     font-weight: 500;
//     padding: 0.8rem 1.6rem;

//     ${media.sm`
//         font-size: 1.6rem;
//     `}
// `
// Button.propTypes = {
//     variant: PropTypes.oneOf(["primary", "secondary"])
// };

// Button.defaultProps = {
//     variant: "primary"
// }


// another option for handling component variations
// no extra package needed
const buttonStyles = {
    backgroundColor: `${themeColors.themeAction2}`,
    backgroundColorSecondary: `${themeColors.themeActionSecondary3}`,
    textColor: `${themeColors.themeTextPrimary}`,
    textColorSecondary: `${themeColors.themeTextPrimary}`
}

export const Button = styled.button`
    background-color: ${props => props.secondary ? `${buttonStyles.backgroundColorSecondary}` : `${buttonStyles.backgroundColor}`};
    border: none;
    border-radius: 5px;
    color: ${props => props.secondary ? `${buttonStyles.textColorSecondary}` : `${buttonStyles.textColor}`};
    font-family: "Poppins";
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 1.6rem;
    
    ${media.sm`
        font-size: 1.6rem;
    `}
`
