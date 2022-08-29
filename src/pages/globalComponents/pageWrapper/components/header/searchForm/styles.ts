import styled from "styled-components";
import {borderRadius, color, fontSize, fontWeight, screen} from "../../../../../../styles/variables";

const searchIcon: string =
    require("../../../../../../assets/icons/searchIcon.svg").default;
const cancelIcon: string =
    require("../../../../../../assets/icons/redCancelIcon.svg").default;

export const FormContainer = styled.div`
    order: 2;
    flex: 1 1 auto;
    padding: 0 10px;

    @media (max-width: ${screen.md}) {
        display: flex;
        justify-content: center;
        order: 3;
    }
    // Form input =========================================
    input {
        padding: 0 15px;
        width: 100%;
        max-width: 500px;
        min-width: 300px;
        height: 48px;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.sm};
        line-height: 137.5%;
        outline-color: #e80000;
        border: 2px solid ${color.generalRed};
        border-radius: ${borderRadius.sm};

        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            background: url(${cancelIcon}) no-repeat;
        }

        &::placeholder {
            padding: 0 0 0 30px;
            color: ${color.secondaryGray};
            background: url(${searchIcon}) no-repeat;
        }
    }
`;