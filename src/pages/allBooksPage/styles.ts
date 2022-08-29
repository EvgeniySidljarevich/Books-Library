import styled from "styled-components";
import { mainContentBoard, RedButton } from "../../styles/styleComponents";
import { color, fontSize, fontWeight } from "../../styles/variables";

type Style = {
    [key: string]: any;
};

export const MainContent = styled.div`
    ${mainContentBoard};
    display: flex;
    flex-direction: column;
    min-height: 300px;

    h2 {
        margin: 0 0 20px;
    }
`;

export const BooksContainer = styled.div<Style>`
    display: ${({ display }) => display};
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 185px;
    grid-gap: 48px 44px;

    height: 100%;
    justify-content: center;
    align-items: center;

    & .alt-text {
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.xl};
        line-height: 137%;
        color: ${color.secondaryGray};
    }
`;

export const ShowBtn = styled(RedButton)`
    margin: 36px auto 0;
    width: 185px;
`;
