import React from "react";
import styled from "styled-components";
import { media, margin, padding, spaces, themeColors } from "../styles/GlobalStyles";
import { Button } from "../components/Button";

const bannerStyles = {
    backgroundColor: `${themeColors.themeBase3}`,
    textColor: `${themeColors.themeTextInverse}`,
    paddingDesktop: `${padding.insetXXL}`,
    paddingMobile: `${padding.insetL}`,
}

const Banner = styled.section`
    background-color: ${bannerStyles.backgroundColor};
    color: ${bannerStyles.textColor};
    padding: ${bannerStyles.paddingMobile};
    text-align: center;

    ${media.sm`
        padding: ${bannerStyles.paddingDesktop};
    `}
`

const BannerTitle = styled.h1`
    margin: 0;
`

const BannerActions = styled.ul`
    font-size: 0;
    list-style: none;
    margin: ${margin.stack};
    padding: 0;
`

const BannerAction = styled.li`
    display: block;
    margin: ${margin.stack};

    ${media.sm`
        display: inline-block;
        font-size: inherit;
        margin: ${margin.inline};

        &:last-of-type {
            margin-right: 0;
        }
    `}
`

export default props => {
    return (
        <Banner>
            <BannerTitle>{props.bannerTitle}</BannerTitle>
            <p>{props.bannerContent}</p>
            <BannerActions>
                <BannerAction>
                    <Button>Button</Button>
                </BannerAction>
                <BannerAction>
                    {/* <Button variant="secondary">Button</Button> */}
                    <Button secondary>Button</Button>
                </BannerAction>
            </BannerActions>
        </Banner>
    );
}