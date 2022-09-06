import { Wrapper } from "../../startPage";
import styled from "styled-components";
import { color } from "../../../styles/variables";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { container } from "../../../styles/styleComponents";
import {memo, ReactNode} from "react";
import { Preloader } from "./components/preloader";
import { useSelector } from "react-redux";
import {useCheckAuth} from "../../../hooks/useCheckAuth";

type Props = {
    children: ReactNode;
    inputDisabled: boolean;
};

export const PageWrapper = memo(({ children, inputDisabled }: Props) => {
    const loader = useSelector((state: { [key: string]: any }) => state.books.isLoading);
    useCheckAuth();

    return (
        <GreyWrapper>
            <Header disabled={inputDisabled}/>
            <Main>
                {loader ? <Preloader /> : children}
            </Main>
            <Footer />
        </GreyWrapper>
    );
});

const GreyWrapper = styled(Wrapper)`
    background: ${color.lightGrey};
`;

const Main = styled.main`
    ${container};
    flex: 1 1 auto;
`;
