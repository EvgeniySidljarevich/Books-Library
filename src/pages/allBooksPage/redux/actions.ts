import {
    ActionRequestType,
    ActionSucceedType,
    ActionFailedType,
    ActionGetValueType, ActionEventBook, Data, ActionDeleteBook,
} from "./types/types";

// TYPES OF ACTIONS ===================================================================================
export const requestBooks = "request_all_books";
export const requestBooksSucceed = "request_all_books_succeed";
export const requestBooksFailed = "request_all_books_failed";
export const inputValue = "input_value";
export const buyingBook = "buying_a_book";
export const waitingBook = "waiting_a_book";
export const deletionBook = "deletion_a_book";


// ACTIONS ===================================================================================

//* for booksReducer *//
export const actionRequestBooks = (): ActionRequestType => {
    return {
        type: requestBooks,
    };
};

export const actionGetBooksSucceed = (data: Response): ActionSucceedType => {
    return {
        type: requestBooksSucceed,
        payload: data,
    };
};

export const actionGetBooksFailed = (error: string): ActionFailedType => {
    return {
        type: requestBooksFailed,
        payload: error,
    };
};

export const actionGetInputValue = (value: string): ActionGetValueType => {
    return {
        type: inputValue,
        payload: value,
    };
};

//* for boughtBooksReducer *//
export const actionBuyBook = (book: Data): ActionEventBook => {
    return {
        type: buyingBook,
        payload: book,
    };
};

export const actionWaitingBook = (book: Data): ActionEventBook => {
    return {
        type: waitingBook,
        payload: book,
    };
};

export const actionDeletionBook = (data: Data[]): ActionDeleteBook => {

    return {
        type: deletionBook,
        payload: data,
    };
};