import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    status: 'idle',
};

export const readContactAsync = createAsyncThunk(
    'phonebook/readContact',
    async
)