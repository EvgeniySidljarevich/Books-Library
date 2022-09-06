import styled from "styled-components";
import {
    borderRadius,
    color,
    fontSize,
    fontWeight,
} from "../../../../styles/variables";
import { GreyButton } from "../../../../styles/styleComponents";
import { Link } from "react-router-dom";

type Style = {
    [key: string]: any;
};

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    max-width: 122px;
    height: 100%;
    flex-direction: column;
    gap: 8px;

    h5 {
        flex: 1;
        margin: 0;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.xs};
        line-height: 135.7%;
        color: ${color.black};
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

export const Image = styled(Link)<Style>`
    width: 100%;
    height: 185px;
    border-radius: ${borderRadius.sm};
    background: center/cover url(${(props) => props.image}) no-repeat;
`;

export const DarkButton = styled(GreyButton)`
    width: 100%;
`;
