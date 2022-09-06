import { useDispatch } from "react-redux";
import { Data } from "../pages/allBooksPage/redux/types/types";
import {actionWaitingBook} from "../pages/allBooksPage/redux/actions";
import { useRequestBooks } from "./useRequestBooks";

export const useBuyBooks = (id: string) => {
    const dispatch = useDispatch();
    const { data } = useRequestBooks();
    const currentBook = data.find((book: Data) => book.id.includes(id));
    return () => {
        currentBook.dateBuying = new Date().getTime();
        dispatch(actionWaitingBook(currentBook));
    };
};
