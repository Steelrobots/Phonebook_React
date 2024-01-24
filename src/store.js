import { applyMiddleware, legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from '../src/reducers';
import { thunk } from "redux-thunk";

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))