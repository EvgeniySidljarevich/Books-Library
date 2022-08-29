import styled from "styled-components";
import {
    borderRadius,
    color,
    fontSize,
    fontWeight,
} from "../../../../styles/variables";
import { GreyButton } from "../../../../styles/styleComponents";
import {Link} from "react-router-dom";

type Style = {
    [key: string]: any;
};

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 12px;
`;

export const Image = styled(Link)<Style>`
    flex: 1;
    width: 122px;
    border-radius: ${borderRadius.sm};
    background: center/cover url(${(props)=> props.image}) no-repeat;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 5px;
    max-height: 100%;

    & .bookholder {
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.xxxs};
        line-height: 140%;
        color: ${color.gray};
        opacity: 0;
    }

    & .book-name {
        flex: 1;
        margin: 0;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.xs};
        line-height: 135.7%;
        color: ${color.black};
    }

    & .book-author {
        flex: 1;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.xxs};
        line-height: 133.3%;
        color: ${color.gray};
    }

    & .react-stars {
        display: flex;
        justify-content: space-between;
        width: 100%;
        line-height: 20px;
    }

    & span {
        transition: 0.3s all;
    }
`;

export const BookStatus = styled.p<Style>`
    display: flex;
    justify-content: center;
    padding: 3px 0;
    width: 100%;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.xxs};
    line-height: 133.3%;
    color: ${color.black};
    border: 2px solid ${({ borderColor }) => borderColor};
    border-radius: 24px;
`;

export const DarkButton = styled(GreyButton)`
    width: 100%;
`;
