import styled from "styled-components";
import { mainContentBoard } from "../../styles/styleComponents";
import {color, fontSize, fontWeight} from "../../styles/variables";

type Style = {
    [key: string]: any;
};

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.div`
    ${mainContentBoard};
    min-height: 300px;

    h2 {
        margin: 0 0 20px;
    }
`;

export const BooksContainer = styled.div<Style>`
    display: ${({ display }) => display};
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 310px;
    grid-gap: 40px 32px;

  justify-content: center;
  align-items: center;

  & .alt-text {
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.xl};
    line-height: 137%;
    color: ${color.secondaryGray};
  }
`;
