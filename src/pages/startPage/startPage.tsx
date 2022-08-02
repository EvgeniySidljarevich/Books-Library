import styled from "styled-components";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

export const StartPage = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
`;
export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: 1260px;
`;
