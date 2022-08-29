import styled from "styled-components";
import { config } from "../../../../locales/en";
import { Content } from "../registrationForm";
import { RedButton } from "../../../../styles/styleComponents";

const { signatures, titles, links } = config;

export const AuthenticationForm = () => {
    return (
        <FormContent>
            <h2>{titles.startPage.registrationForm}</h2>
            <form className="firstForm">
                <label htmlFor="username">
                    {signatures.startPage.registrationForm.username}
                </label>
                <input type="text" id="username" />
            </form>
            <form>
                <label htmlFor="birthdate">
                    {signatures.startPage.registrationForm.birthdate}
                </label>
                <input type="text" id="birthdate" />
            </form>
            <form>
                <label htmlFor="email">
                    {signatures.startPage.registrationForm.email}
                </label>
                <input type="email" id="emailAuth" />
            </form>
            <form>
                <label htmlFor="password">
                    {signatures.startPage.registrationForm.password}
                </label>
                <input type="password" id="passwordAuth" />
            </form>
            <Button>{links.startPage.header.signUp}</Button>
        </FormContent>
    );
};

const FormContent = styled(Content)``;

export const Button = styled(RedButton)`
    margin: 24px 0 0;
    width: 100%;
`;