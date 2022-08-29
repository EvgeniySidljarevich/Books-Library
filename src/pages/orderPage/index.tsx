import { v4 as uuidv4 } from 'uuid';
import { MainContainer, MainContent, BooksContainer } from "./styles";
import { config } from "../../locales/en";
import { PageWrapper } from "../globalComponents/pageWrapper";
import { BookSimpleCard } from "./components/bookSimpleCard";
import { Data } from "../allBooksPage/redux/types/types";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRemoveBook } from "../../hooks/useRemoveBook";

const { titles, buttons, text } = config;
const checkBtn = buttons.orderPage.check;
const returnBtn = buttons.orderPage.return;

export const OrderPage = () => {
    const books = useSelector(
        (store: { [key: string]: any }) => store.myBooks.waitingBooks,
    );
    const removeBook = useRemoveBook(books);

    useEffect(() => {
        const json = JSON.stringify(books);
        localStorage.setItem("boughtBooks", json);
    }, [books, removeBook]);
    console.log(books);

    return (
        <PageWrapper inputDisabled={true}>
            <MainContainer>
                <MainContent>
                    <h2>{titles.orderPage.waitingSection}</h2>
                    <BooksContainer display={books?.length ? "grid" : "flex"}>
                        {books.length ? (books.map((book: Data) => (
                            <BookSimpleCard
                                onClick={removeBook(book.id)}
                                buttonName={returnBtn}
                                book={book}
                                key={uuidv4()}
                            />
                        ))) : <p className="alt-text">{text.orderPage.waitingSection}</p>}
                    </BooksContainer>
                </MainContent>
                <MainContent>
                    <h2>{titles.orderPage.listBooksSection}</h2>
                    <BooksContainer display={"flex"}>
                        {/*<BookSimpleCard buttonName={checkBtn} bookName=/>*/}
                    </BooksContainer>
                </MainContent>
            </MainContainer>
        </PageWrapper>
    );
};
