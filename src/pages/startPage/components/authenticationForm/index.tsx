import styled from "styled-components";
import {
    borderRadius,
    fontWeight,
    fontSize,
    color,
} from "../../../../styles/variables";
import { config } from "../../../../locales/en";
import { RedButton } from "../../../../styles/styleComponents";
import { ChangeEvent, useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const { titles, signatures, links } = config;

export const AuthenticationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        const auth = getAuth();
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then()
                .catch((e) => console.log(e.code));
        }
    };

    return (
        <Content>
            <h2>{titles.startPage.authenticationForm}</h2>
            <form className="firstForm">
                <label htmlFor="emailReg">
                    {signatures.startPage.registrationForm.email}
                    <sup>*</sup>
                </label>
                <input
                    type="text"
                    id="emailReg"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
            </form>
            <form>
                <label htmlFor="passwordReg">
                    {signatures.startPage.registrationForm.password}
                    <sup>*</sup>
                </label>
                <input
                    type="password"
                    id="passwordReg"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
            </form>
            <Button onClick={handleLogin}>
                {links.startPage.header.logIn}
            </Button>
        </Content>
    );
};

export const Content = styled.div`
    h2 {
        margin: 0;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.xl};
        line-height: 137.5%;
        color: ${color.black};
    }

    & .firstForm {
        margin: 53px 0 0;
    }

    form {
        position: relative;
        margin: 42px 0 0;
    }

    label {
        position: absolute;
        top: -26px;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.sm};
        line-height: 137.5%;
        color: ${color.gray};

        sup {
            color: ${color.generalRed};
        }
    }

    input {
        padding: 9px 16px;
        width: 100%;
        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.md};
        line-height: 139%;
        color: ${color.black};
        border: 2px solid ${color.secondaryGray};
        border-radius: ${borderRadius.sm};
    }
`;

export const Button = styled(RedButton)`
    margin: 24px 0 0;
    width: 100%;
`;
