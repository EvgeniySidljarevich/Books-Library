import {ActionEventBook, ActionType, BooksStateType, MyListBooksStateType} from "./types/types";
import {
    buyingBook,
    deletionBook,
    inputValue,
    requestBooks,
    requestBooksFailed,
    requestBooksSucceed,
    waitingBook
} from "./actions";
import {getBooksFromLocalStorage} from "../../../utils/getBooksFromLocalStorage";

export const initialBooksState: BooksStateType = {
    booksData: null,
    error: null,
    isLoading: false,
    inputValue: "",
};

export const initialMyListBooksState: MyListBooksStateType = {
    boughtBooks: [],
    waitingBooks: getBooksFromLocalStorage() || [],
};

export const booksReducer = (state = initialBooksState, action: ActionType) => {
    switch (action.type) {
        case requestBooks:
            return {
                ...state,
                isLoading: true,
            };
        case requestBooksSucceed:
            return {
                ...state,
                booksData: action.payload,
                isLoading: false,
            };
        case requestBooksFailed:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case inputValue:
            return {
                ...state,
                inputValue: action.payload,
            };
        default: return state;
    }
};

export const boughtBooksReducer = (state = initialMyListBooksState, action: ActionEventBook) => {
    switch (action.type) {
        case buyingBook:
            return {
                ...state,
                boughtBooks: [...state.boughtBooks, action.payload],
            };
        case waitingBook:
            return {
                ...state,
                waitingBooks: [...state.waitingBooks, action.payload],
            };
        case deletionBook:
            return {
                ...state,
                waitingBooks: action.payload,
            };
        default: return state;
    }
};
