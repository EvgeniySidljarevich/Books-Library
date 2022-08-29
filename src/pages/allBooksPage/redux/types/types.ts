// action types =========================================================================
export type ActionRequestType = {
    type: string;
};
export type ActionSucceedType = {
    type: string;
    payload: Response;
};
export type ActionFailedType = {
    type: string;
    payload: string;
};
export type ActionGetValueType = {
    type: string;
    payload: string;
};

export type ActionType = {
    type: string;
    payload?: Response | string;
};

export type ActionEventBook = {
    type: string;
    payload: Data;
};

export type ActionDeleteBook = {
    type: string;
    payload: Data[];
};

//reducer types ============================================================================
export type Data = {
    id: string;
    name: string;
    author: string;
    length: string;
    released: string;
    description: string;
    imageUrl: string;
};

export type BooksStateType = {
    booksData: Data[] | null;
    error: null | string,
    isLoading: boolean,
    inputValue: string,
};

export type MyListBooksStateType = {
    boughtBooks: Data[],
    waitingBooks: Data[],
};