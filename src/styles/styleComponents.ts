import styled, { css } from "styled-components";
import { borderRadius, color, fontSize, fontWeight } from "./variables";

export const container = css`
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: 1260px;
`;

export const mainContentBoard = css`
    margin: 0 0 36px;
    padding: 26px 32px;
    border-radius: ${borderRadius.md};
    background: ${color.white};
`;

export const RedButton = styled.button`
    padding: 10px 3px;
    width: max-content;
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
        padding: 7px 0px;
        border: 3px inset #ff220f;
        box-sizing: border-box;
    }
`;

export const GreyButton = styled.button`
    padding: 7px 3px;
    width: max-content;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.xxs};
    line-height: 133.3%;
    color: ${color.white};
    border-radius: ${borderRadius.sm};
    background: ${color.gray};
    transition: background 0.3s ease;

    &:hover {
        background: #595959;
    }

    &:active {
        padding: 4px 0;
        border: 3px inset #424242;
        box-sizing: border-box;
    }
`;
