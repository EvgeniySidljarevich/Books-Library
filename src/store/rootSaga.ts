import {all} from "redux-saga/effects";
import {watchBooksSaga} from "../pages/allBooksPage/redux/saga";

export function* rootSaga () {
    yield all([watchBooksSaga()])
}