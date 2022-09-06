import styled from "styled-components";
import {borderRadius, color, fontWeight} from "../../../../styles/variables";

type Props = {
    state: boolean;
    days: {
        remainingDays: number,
        remainingHours: number,
    };
};
type Style = {
    [key: string]: any;
};

export const StatusPopUp = ({state, days}:Props) => {
   return (
       <PopUp display={state ? "block" : "none"}>
           <p>
               This book can't be kept for more than 12 days. <br />
               left: <span>{days.remainingDays}</span>d <span>{days.remainingHours}</span>h
           </p>
       </PopUp>
   );
};

export const PopUp = styled.div<Style>`
  display: ${({display}) => display};
    position: absolute;
  z-index: 5;
  bottom: 38px;
  left: -20px;
  padding: 10px;
  width: 160px;
  font-weight: ${fontWeight.regular};
  font-size: 16px;
  line-height: 22px;
  color: ${color.black};
  border: 2px solid ${color.secondaryGray};
  border-radius: ${borderRadius.sm};
  background: ${color.lightGrey};
  
  span {
    font-weight: ${fontWeight.semiBold};
  }
`;