import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import exampleSlice from "./reducers/example";
import charactersSlice from "./reducers/characters";

import exampleSaga from "./sagas/example";
import charactersSaga from "./sagas/characters";

/* Reducers */ 
const reducers = combineReducers({
  example: exampleSlice.reducer,
  characters: charactersSlice.reducer,
});

/* Sagas */ 
export const rootSagas = function* rootSagas(): any {
  return yield all([
    exampleSaga(),
    charactersSaga(),
  ]);
};


/* Store and middlewares configuration */ 
const sagaMiddleware = createSagaMiddleware({});

const middlewares: any = [];
middlewares.push(sagaMiddleware);

const Store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export { Store };
