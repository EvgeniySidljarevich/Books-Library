import {useSelector} from "react-redux";
import {useRef} from "react";
import {Data} from "../pages/allBooksPage/redux/types/types";

export const useCheckBookStatus = (bookId: string) => {
    const books = useSelector(
        (store: { [key: string]: any }) => store.myBooks.waitingBooks,
    );
    const isTaken = useRef(false);
    const getTaken = () => {
        books.forEach((book: Data) => {
            if (book.id === bookId) {
                isTaken.current = true
            }
        });
        return isTaken.current;
    }
    return {getTaken};
};