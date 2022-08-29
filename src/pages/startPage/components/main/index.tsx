import styled from "styled-components";
import {
    borderRadius,
    color,
    fontSize,
    screen,
    fontWeight,
} from "../../../../styles/variables";
import { config } from "../../../../locales/en";
import { container } from "../../../../styles/styleComponents";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { titles, text, buttons } = config;
const background: string =
    require("../../../../assets/backgrounds/startPageBackground.svg").default;

export const Main = () => {
    const myBooks = useSelector((state: any) => state.myBooks);
    const books = {
        boughtBooks: myBooks.boughtBooks,
        waitingBooks: myBooks.waitingBooks,
    };
    return (
        <MainContainer>
            <ContentContainer>
                <Content>
                    <h2>{titles.startPage.main}</h2>
                    <p>{text.startPage.main}</p>
                    <NavLink to="/fox-library/your-order" state={books}>
                        {buttons.startPage.main}
                    </NavLink>
                </Content>
            </ContentContainer>
        </MainContainer>
    );
};

const MainContainer = styled.main`
    ${container};
    padding: 36px 0 0;
    flex: 1 1 auto;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 80px;
    border-radius: ${borderRadius.sm};
    background: 46% / cover url(${background}) no-repeat;

    @media (max-width: ${screen.md}) {
        padding: 60px 40px;
    }

    @media (max-width: ${screen.sm}) {
        align-items: center;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 310px;

    @media (max-width: ${screen.sm}) {
        align-items: center;
    }

    &:not(:last-child) {
        margin: 0 0 20px 0;
    }

    h2 {
        margin: 0 0 40px 0;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.xxxl};
        line-height: 136.8%;
        color: ${color.black};

        @media (max-width: ${screen.sm}) {
            text-align: center;
        }
    }

    p {
        margin: 0 0 40px 0;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.xxl};
        line-height: 135.7%;
        color: ${color.black};
    }
`;

const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    padding: 10px 3px;
    width: 185px;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.lg};
    line-height: 135%;
    color: ${color.white};
    border-radius: ${borderRadius.sm};
    background: ${color.generalRed};
    transition: background 0.3s ease;

    &:hover {
        background: #ff3b29;
    }

    &:active {
        padding: 7px 0;
        border: 3px inset #ff220f;
        box-sizing: border-box;
    }
`;
