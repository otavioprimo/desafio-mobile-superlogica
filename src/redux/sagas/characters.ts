import { all, put, takeLatest } from "redux-saga/effects";

import charactersSlice, { charactersList } from "../reducers/characters";


function* get() {
    let characters = [];

    yield put(charactersSlice.actions.load(characters));
}

export default function* root(): any {
    yield all([
        yield takeLatest(charactersSlice.actions.get, get)
    ]);
}