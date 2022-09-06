import styled from "styled-components";
import {
    borderRadius,
    color,
    fontSize,
    fontWeight,
} from "../../styles/variables";
import { RedButton } from "../../styles/styleComponents";

export const Main = styled.div`
    display: flex;
    margin: 0 auto 36px;
    padding: 26px 32px;
    flex-direction: column;
    align-items: center;
    width: 400px;
    min-height: 300px;
    border-radius: ${borderRadius.md};
    background: ${color.white};

    h3 {
        margin: 0 0 40px;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.lg};
        line-height: 135%;
        color: ${color.black};
    }

    & .photo-container {
        margin: 0 0 26px;
        width: 122px;
        height: 129px;
    }

    img {
        margin: 0 0 16px;
        width: 81px;
        height: 81px;
        border-radius: 50%;
        border: 2px solid ${color.secondaryGray};
    }

    & .form-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 0 0 20px;
        width: 100%;
    }

    form {
        position: relative;
        margin: 40px 0 0;
    }

    & .form-label {
        position: absolute;
        top: -26px;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.sm};
        line-height: 137.5%;
        color: ${color.black};
    }

    input {
        padding: 9px 16px;
        width: 100%;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.md};
        line-height: 139%;
        color: ${color.black};
        border: 2px solid ${color.secondaryGray};
        border-radius: ${borderRadius.sm};
    }
`;

export const GreyBtn = styled.label`
    margin: 0 0 26px;
    width: 122px;
    padding: 7px 3px;
  text-align: center;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.xxs};
    line-height: 133.3%;
    color: ${color.white};
    border-radius: ${borderRadius.sm};
    background: ${color.gray};
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #595959;
    }

    &:active {
        padding: 4px 0;
        border: 3px inset #424242;
        box-sizing: border-box;
    }

    input[type="file"] {
        display: none;
    }
`;

export const RedBtn = styled(RedButton)`
    width: 122px;
`;
