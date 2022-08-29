import styled from "styled-components";
import { color } from "../../../../../styles/variables";

export const Preloader = () => {
    return (
        <LoadWindow>
            <span className="loader" />
        </LoadWindow>
    );
};

const LoadWindow = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    background: rgba(108, 108, 108, 0.6);

    & .loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 75px;
        height: 75px;
        border: 10px solid ${color.white};
        border-radius: 50%;
        border-top-color: ${color.generalRed};
        animation: 1s spin infinite linear;
    }

    @keyframes spin {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;
