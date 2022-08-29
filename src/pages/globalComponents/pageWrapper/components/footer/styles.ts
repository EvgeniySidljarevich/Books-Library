import styled from "styled-components";
import { color, fontSize, fontWeight } from "../../../../../styles/variables";
import { container } from "../../../../../styles/styleComponents";

export const FooterSection = styled.footer`
    padding: 40px 0;
    width: 100vw;
    min-height: 200px;
    background: ${color.generalBlue};

    h5 {
        margin: 0;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.md};
        line-height: 139%;
        color: ${color.black};
    }

    li {
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.sm};
        line-height: 137.5%;
        color: ${color.black};
    }

    ul {
        margin: 20px 0 0;
    }
`;

export const FooterContainer = styled.div`
    ${container};
    display: flex;
    gap: 24px;
`;

export const AboutColumn = styled.div`
    li:not(:last-child) {
        margin: 0 0 8px;
    }
`;

export const HelpColumn = styled(AboutColumn)``;

export const AccountColumn = styled(AboutColumn)`
    flex: 1 1 auto;
`;

export const ConnectionColumn = styled.div`
    ul {
        display: flex;
        gap: 20px;
    }
`;
