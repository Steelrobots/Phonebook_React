import { applyMiddleware, configureStore, legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from '../src/reducers';
import { thunk } from "redux-thunk";
import contactsReducer from "../src/reducers/phonebook"

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))c
export const store = configureStore({
    reducer:{
        contacts: contactsReducer
    }
})
