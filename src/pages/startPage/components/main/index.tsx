import styled from "styled-components";
import {
    borderRadius,
    color,
    fontSize,
    screen,
    fontWeight,
} from "../../../../styles/variables";
import { config } from "../../../../locales/en";
import { container, RedButton } from "../../../../styles/styleComponents";
import {WarningPopUp} from "../popUp/warningPopUp";
import {useStartButton} from "../../../../hooks/useStartButton";

const { titles, text, buttons } = config;
const background: string =
    require("../../../../assets/backgrounds/startPageBackground.svg").default;

export const Main = () => {
    const {isOpen, handleEnter} = useStartButton();

    return (
        <MainContainer>
            <ContentContainer>
                <Content>
                    <h2>{titles.startPage.main}</h2>
                    <p className="content-text">{text.startPage.main}</p>
                    <EnterBtn onClick={handleEnter}>{buttons.startPage.main}</EnterBtn>
                    <WarningPopUp state={isOpen}/>
                </Content>
            </ContentContainer>
        </MainContainer>
    );
};

const MainContainer = styled.main`
    ${container};
    padding: 36px 0 0;
    flex: 1 1 auto;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 80px;
    border-radius: ${borderRadius.sm};
    background: 46% / cover url(${background}) no-repeat;

    @media (max-width: ${screen.md}) {
        padding: 60px 40px;
    }

    @media (max-width: ${screen.sm}) {
        align-items: center;
    }
`;

const Content = styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    max-width: 310px;

    @media (max-width: ${screen.sm}) {
        align-items: center;
    }

    &:not(:last-child) {
        margin: 0 0 20px 0;
    }

    h2 {
        margin: 0 0 40px 0;
        font-weight: ${fontWeight.bold};
        font-size: ${fontSize.xxxl};
        line-height: 136.8%;
        color: ${color.black};

        @media (max-width: ${screen.sm}) {
            text-align: center;
        }
    }

    & .content-text {
        margin: 0 0 40px 0;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.xxl};
        line-height: 135.7%;
        color: ${color.black};
    }
`;

const EnterBtn = styled(RedButton)`
    width: 185px;
`;
