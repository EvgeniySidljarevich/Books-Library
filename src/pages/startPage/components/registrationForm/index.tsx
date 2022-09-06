import styled from "styled-components";
import { config } from "../../../../locales/en";
import { Content } from "../authenticationForm";
import { RedButton } from "../../../../styles/styleComponents";
import { ChangeEvent } from "react";
import { color } from "../../../../styles/variables";
import { useRegistration } from "../../../../hooks/useRegistration";

const { signatures, titles, links } = config;

export const RegistrationForm = () => {
    const {
        email,
        setEmail,
        userName,
        setUserName,
        password,
        setPassword,
        handleRegister,
    } = useRegistration();

    return (
        <FormContent>
            <h2>{titles.startPage.registrationForm}</h2>
            <form className="firstForm">
                <label htmlFor="username">
                    {signatures.startPage.registrationForm.username}
                </label>
                <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserName(e.target.value)
                    }
                />
            </form>
            <form>
                <label htmlFor="emailAuth">
                    {signatures.startPage.registrationForm.email}
                    <sup>*</sup>
                </label>
                <input
                    type="email"
                    id="emailAuth"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
            </form>
            <form>
                <label htmlFor="passwordAuth">
                    {signatures.startPage.registrationForm.password}
                    <sup>*</sup>
                </label>
                <input
                    type="password"
                    id="passwordAuth"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
            </form>
            <Button onClick={handleRegister}>
                {links.startPage.header.signUp}
            </Button>
        </FormContent>
    );
};

const FormContent = styled(Content)`
    sup {
        color: ${color.generalRed};
    }
`;

export const Button = styled(RedButton)`
    margin: 24px 0 0;
    width: 100%;
`;
