import styled from "styled-components";
import { screen } from "../../../../../../styles/variables";
import { config } from "../../../../../../locales/en";

const { signatures } = config;
const logo: string = require("../../../../../../assets/icons/logo.svg").default;

export const Logo = () => {
    return (
        <LogoContainer>
            <a href="/">
                <img src={logo} alt={signatures.startPage.header.logoImage} />
            </a>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    order: 1;
    margin: 0 96px 0 0;

    @media (max-width: ${screen.lg}) {
        margin: 0 30px 0 0;
    }

    img {
        width: 172px;
    }
`;
