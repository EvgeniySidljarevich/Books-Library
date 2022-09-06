import styled from "styled-components";
import {borderRadius, color, fontSize, fontWeight} from "../../../../../../../styles/variables";

type Style = {
    [key: string]: any;
};

export const Modal = styled.div<Style>`
    position: absolute;
    top: 100px;
    right: 75px;
    display: ${({ display }) => display};
    flex-direction: column;
    padding: 13px 20px;
    min-width: 160px;
    background: ${color.white};
    box-shadow: 0px 5px 10px ${color.gray};
    border-radius: ${borderRadius.sm};

    h5 {
        margin: 0 0 25px;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.md};
        line-height: 139%;
        color: ${color.black};
    }

    & .setting {
        padding: 0 0 10px;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.sm};
        line-height: 139%;
        color: ${color.gray};
        border-bottom: 1px solid ${color.secondaryGray};
    }

    & .orders {
        margin: 0 0 25px;
        padding: 10px 0 0;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.sm};
        line-height: 139%;
        color: ${color.gray};
    }

    button {
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.sm};
        line-height: 139%;
        color: ${color.generalRed};
        background: inherit;
    }
  
  button:hover {
    font-weight: ${fontWeight.bold};
    color: red;
  }
`;
