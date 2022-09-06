import styled from "styled-components";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Modal } from "./components/popUp/authForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "./components/registrationForm";
import { AuthenticationForm } from "./components/authenticationForm";
import { useAuthButtons } from "../../hooks/useAuthButtons";

export const StartPage = () => {
    const { isOpenAuth, isOpenReg, handleClickReg, handleClickAuth } =
        useAuthButtons();
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/fox-library");
    }, []);

    return (
        <Wrapper>
            <Header regClick={handleClickReg} authClick={handleClickAuth} />
            <Main />
            <Modal state={isOpenReg} onClick={handleClickReg}>
                <RegistrationForm />
            </Modal>
            <Modal state={isOpenAuth} onClick={handleClickAuth}>
                <AuthenticationForm />
            </Modal>
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
