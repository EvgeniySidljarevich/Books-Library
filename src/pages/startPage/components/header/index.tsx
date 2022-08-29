import { MouseEvent } from "react";
import styled from "styled-components";
import {
    screen,
    fontSize,
    color,
    borderRadius,
    fontWeight,
} from "../../../../styles/variables";
import { config } from "../../../../locales/en";
import { container } from "../../../../styles/styleComponents";

const {
    signatures: { startPage },
    links: {
        startPage: { header },
    },
} = config;
const logo: string = require("../../../../assets/icons/logo.svg").default;
const searchIcon: string =
    require("../../../../assets/icons/searchIcon.svg").default;
const cancelIcon: string =
    require("../../../../assets/icons/redCancelIcon.svg").default;

type Props = {
    regClick: () => void;
    authClick: () => void;
};

export const Header = ({ authClick, regClick }: Props) => {
    const handleClickReg = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        regClick();
    };
    const handleClickAuth = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        authClick();
    };

    return (
        <HeaderContainer>
            <LogoContainer>
                <a href="/">
                    <img src={logo} alt={startPage.header.logoImage} />
                </a>
            </LogoContainer>
            <FormContainer>
                <input
                    type="search"
                    placeholder={startPage.header.inputPlaceholder}
                    disabled
                />
            </FormContainer>
            <AuthBlock>
                <a href="/" onClick={handleClickReg}>
                    {header.logIn}
                </a>
                <a href="/" onClick={handleClickAuth}>
                    {header.signUp}
                </a>
            </AuthBlock>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    ${container};
    display: flex;
    align-items: center;
    min-height: 108px;

    @media (max-width: ${screen.md}) {
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }

    @media (max-width: ${screen.sm}) {
        justify-content: center;
    }
`;

const LogoContainer = styled.div`
    order: 1;
    margin: 0 96px 0 0;

    @media (max-width: ${screen.lg}) {
        margin: 0 30px 0 0;
    }
    // Logo image =========================================
    img {
        width: 172px;
    }
`;

const FormContainer = styled.div`
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

const AuthBlock = styled.div`
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
