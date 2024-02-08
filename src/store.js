import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../src/reducers/phonebook"


export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})
