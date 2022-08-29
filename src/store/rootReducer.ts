import {combineReducers} from "redux";
import {booksReducer, boughtBooksReducer} from "../pages/allBooksPage/redux/reducer";

export const reducer = combineReducers({
    books: booksReducer,
    myBooks: boughtBooksReducer,
})