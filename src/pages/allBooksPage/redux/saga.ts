import {
    actionGetBooksFailed,
    actionGetBooksSucceed,
    requestBooks,
} from "./actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { getBooksData } from "../../../api/libraryApi";

function* getBooksSaga() {
    try {
        const response: Response = yield call(getBooksData);
        yield put(actionGetBooksSucceed(response));
    } catch (error) {
        if (error instanceof Error) {
            yield put(actionGetBooksFailed(error.message));
        }
    }
}

export function* watchBooksSaga() {
    yield takeLatest(requestBooks, getBooksSaga);
}
