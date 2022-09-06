import styled from "styled-components";
import { borderRadius, color, fontWeight } from "../../../../styles/variables";
import {config} from "../../../../locales/en";

const {text} = config;
type Style = {
    [key: string]: any;
};
type Props = {
  state: boolean;
};

export const WarningPopUp = ({state}: Props) => {

    return (
        <PopUp className={state ? "active" : ""}>
            <WarningText>
                {text.startPage.warningPopUp}
            </WarningText>
        </PopUp>
    );
};

const PopUp = styled.div`
  position: absolute;
  top: 170px;
  padding: 10px;
  max-width: 300px;
  border-radius: ${borderRadius.sm};
  background: rgb(144, 224, 255);
  opacity: 0;
  transition: 0.4s;
  
  &.active {
    opacity: 1;
    transition: 0.4s;
  }
`;

const WarningText = styled.p`
    text-align: start;
    font-weight: ${fontWeight.regular};
    font-size: 16px;
    line-height: 22px;
    color: ${color.black};
`;