import {
    CardContainer,
    Image,
    DarkButton,
    Description,
    BookStatus,
} from "./styles";
import { color } from "../../../../styles/variables";
import { config } from "../../../../locales/en";
import { StarRating } from "../../../globalComponents/starRating";
import { Data } from "../../redux/types/types";
import {useBuyBooks} from "../../../../hooks/useBuyBooks";
import {useCheckBookStatus} from "../../../../hooks/useCheckBookStatus";

const { text, buttons } = config;
const available = text.allBooksPage.bookStatus.available;
const taken = text.allBooksPage.bookStatus.taken;
const blueBorderColor = color.generalBlue;
const redBorderColor = color.generalRed;

type Props = {
    book: Data;
};

export const BookFoolCard = ({ book }: Props) => {
    const bookId = book.id;
    const buyBook = useBuyBooks(bookId);
    const {getTaken} = useCheckBookStatus(bookId);

    return (
        <CardContainer >
            <Image
                to={`/fox-library/${bookId}`}
                image={book.imageUrl}
            />
            <Description>
                <BookStatus borderColor={getTaken() ? redBorderColor : blueBorderColor}>
                    {getTaken() ? taken : available}
                </BookStatus>
                <p className="bookholder">Bookholder: cris11</p>
                <h5 className="book-name">
                    {book.name.length > 28
                        ? `${book.name.slice(0, 28)}...`
                        : book.name}
                </h5>
                <p className="book-author">by {book.author}</p>
                <StarRating value={3} size="16" onChange={""} edit={false} />
                <DarkButton onClick={buyBook}>
                    {buttons.allBooksPage.order}
                </DarkButton>
            </Description>
        </CardContainer>
    );
};
