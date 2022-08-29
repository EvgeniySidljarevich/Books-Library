import styled from "styled-components";
import {
    color,
    fontSize,
    fontWeight,
    screen,
} from "../../../../../../styles/variables";

export const NavigationBlock = styled.nav`
    display: flex;
    justify-content: space-between;
    order: 3;

    @media (max-width: ${screen.md}) {
        order: 2;
    }

    a {
        position: relative;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.lg};
        line-height: 135%;
        color: ${color.gray};
        transition: color 0.2s ease;

        &:not(:last-child) {
            margin: 0 30px 0 0;
        }

        &:hover,
        &:focus {
            color: ${color.generalRed};
        }
    }
`;
