import styled from "styled-components";
import { borderRadius } from "../../../../../../styles/variables";
import {config} from "../../../../../../locales/en";

const {signatures} = config;
const userIcon: string =
    require("../../../../../../assets/icons/userIcon.svg").default;
const buttonOpenIcon: string =
    require("../../../../../../assets/icons/openArrowIcon.svg").default;

export const Users = () => {
    return (
        <UsersContainer>
            <img src={userIcon} alt={signatures.allBooksPage.userIcon} />
            <button />
        </UsersContainer>
    );
};

const UsersContainer = styled.div`
    display: flex;
    gap: 17px;
    order: 4;
    margin: 0 0 0 40px;

    & > img {
        width: 45px;
        height: 45px;
        border-radius: ${borderRadius.sm};
    }

    button {
        width: 15px;
        background: center/contain url(${buttonOpenIcon}) no-repeat;
    }
`;
