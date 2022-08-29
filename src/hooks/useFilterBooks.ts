import { useSelector } from "react-redux";
import { Data } from "../pages/allBooksPage/redux/types/types";
import {useRequestBooks} from "./useRequestBooks";

type StateType = { [key: string]: any };

export const useFilterBooks = () => {
    let filterData;
    const {data, error} = useRequestBooks();
    const inputValue = useSelector(
        (state: StateType) => state.books.inputValue,
    );

    if (data === null) {
        filterData = data;
    } else {
        filterData = data?.filter((book: Data) => {
            return (
                book.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase().trim()) ||
                book.author
                    .toLowerCase()
                    .includes(inputValue.toLowerCase().trim())
            );
        });
    }

    return { error, filterData };
};
