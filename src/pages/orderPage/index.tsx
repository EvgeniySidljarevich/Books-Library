import { v4 as uuidv4 } from "uuid";
import { MainContainer, MainContent, BooksContainer } from "./styles";
import { config } from "../../locales/en";
import { PageWrapper } from "../globalComponents/pageWrapper";
import { BookSimpleCard } from "./components/bookSimpleCard";
import { Data } from "../allBooksPage/redux/types/types";
import { useSelector } from "react-redux";
import { useRemoveBook } from "../../hooks/useRemoveBook";
import { useEffect } from "react";

const { titles, buttons, text } = config;
const checkBtn = buttons.orderPage.check;
const returnBtn = buttons.orderPage.return;

export const OrderPage = () => {
    const books = useSelector(
        (store: { [key: string]: any }) => store.myBooks.waitingBooks,
    );

    const waitingBooks = books.filter(
        (book: any) => book.dateBuying + 1036800000 > new Date().getTime(),
    );

    const removeBook = useRemoveBook(books);

    useEffect(() => {
        const json = JSON.stringify(books);
        localStorage.setItem("boughtBooks", json);
    }, [books, removeBook, waitingBooks]);

    return (
        <PageWrapper inputDisabled={true}>
            <MainContainer>
                <MainContent>
                    <h2>{titles.orderPage.waitingSection}</h2>
                    <BooksContainer
                        display={waitingBooks?.length ? "grid" : "flex"}
                    >
                        {books.length ? (
                            waitingBooks.map((book: Data) => (
                                <BookSimpleCard
                                    buttonName={checkBtn}
                                    book={book}
                                    key={uuidv4()}
                                />
                            ))
                        ) : (
                            <p className="alt-text">
                                {text.orderPage.waitingSection}
                            </p>
                        )}
                    </BooksContainer>
                </MainContent>
                <MainContent>
                    <h2>{titles.orderPage.listBooksSection}</h2>
                    <BooksContainer display={books?.length ? "grid" : "flex"}>
                        {books.length ? (
                            books.map((book: Data) => (
                                <BookSimpleCard
                                    onClick={removeBook(book.id)}
                                    buttonName={returnBtn}
                                    book={book}
                                    key={uuidv4()}
                                />
                            ))
                        ) : (
                            <p className="alt-text">
                                {text.orderPage.listBooksSection}
                            </p>
                        )}
                    </BooksContainer>
                </MainContent>
            </MainContainer>
        </PageWrapper>
    );
};
