import {useDispatch} from "react-redux";
import {Data} from "../pages/allBooksPage/redux/types/types";
import {actionDeletionBook} from "../pages/allBooksPage/redux/actions";

export const useRemoveBook = (data: Data[]) => {
    const dispatch = useDispatch();

    const removeBook = (id: string) => {
        return () => {
            const newList = data.filter((book: Data) => !book.id.includes(id));
            dispatch(actionDeletionBook(newList));
        };
    };

    return removeBook;
}