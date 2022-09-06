import {useSelector} from "react-redux";
import {useRemoveBook} from "./useRemoveBook";
import {useEffect} from "react";

export const useRemoveBookBtn = () => {
    const books = useSelector(
        (store: { [key: string]: any }) => store.myBooks.waitingBooks,
    );
    const removeBook = useRemoveBook(books);

    useEffect(() => {
        const json = JSON.stringify(books);
        localStorage.setItem("boughtBooks", json);
    }, [books, removeBook]);

    return {books, removeBook}
};