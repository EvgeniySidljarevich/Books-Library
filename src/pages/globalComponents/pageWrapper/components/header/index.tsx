import styled from "styled-components";
import { screen } from "../../../../../styles/variables";
import { Users } from "./userBlock";
import { Logo } from "./logo";
import { SearchForm } from "./searchForm";
import { Navigation } from "./navBlock";
import { container } from "../../../../../styles/styleComponents";

type Props = {disabled: boolean};

export const Header = ({ disabled }:Props) => {

    return (
        <HeaderContainer>
            <Logo />
            <SearchForm disabled={disabled} />
            <Navigation />
            <Users />
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
