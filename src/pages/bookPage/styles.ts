import styled from "styled-components";
import {GreyButton, mainContentBoard, RedButton} from "../../styles/styleComponents";
import {borderRadius, color, fontSize, fontWeight} from "../../styles/variables";

export const MainContent = styled.div`
    ${mainContentBoard};
    display: flex;
    gap: 33px;
`;

export const Image = styled.img`
    width: 300px;
    height: 455px;
    border-radius: ${borderRadius.sm};
    background: cadetblue;
`;

export const BookDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 70%;

    & > div {
        margin: 0 0 24px;
    }

    h2 {
        margin: 0 0 12px;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.mxl};
        line-height: 135%;
        color: ${color.black};
    }

    h4 {
        margin: 0 0 24px;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.xl};
        line-height: 137.5%;
        color: ${color.generalRed};
    }

    & .description {
        margin: 0 0 10px;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.md};
        line-height: 139%;
        color: ${color.gray};
    }

    & .article-title {
        margin: 0 0 16px;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.xxl};
        line-height: 135%;
        color: ${color.black};
    }

    & .article-text {
        margin: 0 0 16px;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.sm};
        line-height: 137%;
        color: ${color.black};
    }

    & .react-stars {
        display: flex;
        justify-content: space-between;
        width: 160px;
        line-height: 25px;
    }

    & span {
        transition: 0.3s all;
    }
`;

export const RedBtn = styled(RedButton)`
    margin: 0 0 59px;
    width: 185px;
`;

export const GrayBtn = styled(GreyButton)`
    width: 122px;
`;
