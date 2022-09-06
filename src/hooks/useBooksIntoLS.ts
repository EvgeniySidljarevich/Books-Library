import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useBooksIntoLS = () => {
    const isMounting = useRef(false);

    const boughtBooks = useSelector(
        (state: { [key: string]: any }) => state.myBooks.waitingBooks,
    );

    useEffect(() => {
        if (isMounting.current) {
            const json = JSON.stringify(boughtBooks);
            localStorage.setItem("boughtBooks", json);
        }
        isMounting.current = true;
    }, [boughtBooks]);
};