import styled from "styled-components";
import { borderRadius, color } from "../../../../styles/variables";
import { ReactNode } from "react";

const closeButton: string =
    require("../../../../assets/icons/greyCancelIcon.svg").default;

type Props = {
    onClick: () => void;
    children: ReactNode;
    state: boolean;
};

export const Modal = ({ children, onClick, state }: Props) => {
    return (
        <View className={state ? "active" : ""}>
            <ModalWindow className={state ? "active" : ""}>
                <CloseButton onClick={onClick} />
                {children}
            </ModalWindow>
        </View>
    );
};

const View = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(98, 98, 98, 0.8);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;

    &.active {
        opacity: 1;
        pointer-events: all;
    }
`;

const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    padding: 40px 32px;
    width: 100%;
    max-width: 384px;
    border-radius: ${borderRadius.sm};
    background: ${color.white};
    transition: 0.3s;

    &.active {
        transform: translate(-50%, -50%) scale(1);
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 18px;
    height: 18px;
    background: url(${closeButton}) no-repeat;

    &:active {
        width: 16px;
        height: 16px;
        top: 21px;
        right: 21px;
    }
`;
