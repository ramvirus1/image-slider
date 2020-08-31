import { applyMiddleware, compose, createStore } from 'redux'

import { rootSaga } from '../sagas/rootSaga';
import { rootReducer } from '../reducers/rootReducer';

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
                            rootReducer, 
                            applyMiddleware(sagaMiddleware)
                    )
sagaMiddleware.run(rootSaga);