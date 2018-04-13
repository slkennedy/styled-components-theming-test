import React from "react";
import styled from "styled-components";
import { media, margin, padding, spaces, themeColors } from "../styles/GlobalStyles";
import { Button } from "../components/Button";

const cardStyles = {
    backgroundColor: `${themeColors.themeBase2}`,
    textColor: `${themeColors.themeTextPrimary}`,
    padding: `${padding.insetSquish}`
}

const Card = styled.article`
    background-color: ${cardStyles.backgroundColor};
    color: ${cardStyles.textColor};
    padding: ${cardStyles.padding};
    margin: ${margin.stack};

    h1 {
        margin: 0;
    }
`

const CardActions = styled.ul`
    font-size: 0;
    list-style: none;
    margin: ${margin.stack};
    padding: 0;
`

const CardAction = styled.li`
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
        <Card>
            <h1>Card Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsa repellendus recusandae eligendi veritatis cumque tempore, praesentium officia totam excepturi quibusdam exercitationem eveniet, velit ea sit hic corrupti quidem quod.</p>
            <CardActions>
                <CardAction>
                    <Button>Card Action</Button>
                </CardAction>
            </CardActions>
        </Card>
    )
}