import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionRequestBooks } from "../pages/allBooksPage/redux/actions";

export const useRequestBooks = () => {
    const dispatch = useDispatch();

    const data = useSelector(
        (state: { [key: string]: any }) => state.books.booksData,
    );
    const error = useSelector(
        (state: { [key: string]: any }) => state.books.error,
    );

    useEffect(() => {
        if (data === null) {
            dispatch(actionRequestBooks());
        }
    }, [data, dispatch]);

    return { data, error };
};