import styled from "styled-components";
import { borderRadius } from "../../../../../../styles/variables";
import { config } from "../../../../../../locales/en";
import { Popup } from "./popup";
import { useState } from "react";
import { color } from "../../../../../../styles/variables";
import {usePhotoFromFB} from "../../../../../../hooks/usePhotoFromFB";

const { signatures } = config;
const buttonOpenIcon: string =
    require("../../../../../../assets/icons/openArrowIcon.svg").default;
const buttonCloseIcon: string =
    require("../../../../../../assets/icons/closeArrowIcon.svg").default;
type Style = {
    [key: string]: any;
};

export const Users = () => {
  const {userPhoto} = usePhotoFromFB();
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <UsersContainer>
            <img src={userPhoto} alt={signatures.allBooksPage.userIcon} />
            <ArrowButton
                icon={isOpen ? buttonCloseIcon : buttonOpenIcon}
                onClick={handleClick}
            />
            <Popup state={isOpen} />
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
        border: 2px solid ${color.secondaryGray};
        border-radius: ${borderRadius.sm};
    }
`;

const ArrowButton = styled.button<Style>`
    width: 15px;
    background: center/contain url(${({ icon }) => icon}) no-repeat;
`;
