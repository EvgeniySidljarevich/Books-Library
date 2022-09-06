import { CardContainer, Image, DarkButton } from "./styles";
import { StarRating } from "../../../globalComponents/starRating";
import { Data } from "../../../allBooksPage/redux/types/types";
import { MouseEventHandler, useState } from "react";
import { StatusPopUp } from "../statusPopUp";
import {useCheckStatus} from "../../../../hooks/useCheckStatus";

type Props = {
    buttonName: string;
    book: Data;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const BookSimpleCard = ({ buttonName, book, onClick }: Props) => {
    const {isOpen, remainingDays, remainingHours, checkStatus} = useCheckStatus();
    const click = onClick || checkStatus(book.dateBuying as number);
    return (
        <CardContainer>
            <Image to={`/fox-library/${book.id}`} image={book.imageUrl} />
            <h5 className="book-name">
                {book.name.length > 28
                    ? `${book.name.slice(0, 27)}...`
                    : book.name}
            </h5>
            <StarRating value={3} size="16" onChange={""} edit={true} />
            <DarkButton onClick={click}>{buttonName}</DarkButton>
            <StatusPopUp
                state={isOpen}
                days={{ remainingDays, remainingHours }}
            />
        </CardContainer>
    );
};
