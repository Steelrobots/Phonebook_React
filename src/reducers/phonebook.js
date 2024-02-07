import { createSlice, current } from '@reduxjs/toolkit';
import { loadPhonebooks, loadPage, addPhonebooks, deletePhonebooks, updateData, updateAvatar } from './API';


const initialState = {
    phonebooks: [],
    page: 1,
    pages: 1,
    limit: 30,
    total: 31,
    status: 'idle',
    error: null
};



const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        resetContacts: (state) => {
            state.phonebooks = [];
            state.page = 1;
            state.pages = 1;
            state.limit = 30;
            state.total = 31;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPhonebooks.fulfilled, (state, action) => {
                // console.log('ini yang datang dari belakang', action.payload)
                state = { ...state, ...action.payload, status: 'succeeded' }
                // console.log('ini load', state)
                return state
            })
            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(loadPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPage.fulfilled, (state, action) => {
                console.log('on scroll', current(state), action.payload)
                state = { ...state,  phonebooks: [...state.phonebooks, ...action.payload.phonebooks], status: 'succeeded' }
                state.page = action.payload.page;
                state.status = 'succeeded';
                return state
            })
            .addCase(loadPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(addPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPhonebooks.fulfilled, (state, action) => {
                console.log(action.payload)
                state = { ...action.payload.phonebooks, ...state, status: 'succeeded' }
                // state.phonebooks.unshift(action.payload);
                state.status = 'succeeded';
                console.log(state)
            })
            .addCase(addPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(deletePhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deletePhonebooks.fulfilled, (state, action) => {
                state.phonebooks = state.phonebooks.filter(
                    (data) => data.id !== action.payload.id
                );
                state.status = 'succeeded';
            })
            .addCase(deletePhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(updateData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateData.fulfilled, (state, action) => {
                state.phonebooks = state.phonebooks.map((item) => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                        item.phone = action.payload.phone;
                    }
                    return item;
                });
                state.status = 'succeeded';
            })
            .addCase(updateData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(updateAvatar.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.phonebooks = state.phonebooks.map((item) => {
                    if (item.id === action.payload.id) {
                        item.avatar = action.payload.avatar;
                    }
                    return item;
                });
                state.status = 'succeeded';
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    }
});

export const selectPhonebooks = (state) => {
    console.log('getphonebooks', state.contacts)
    return state.contacts
}
// const currentState = selectPhonebooks(getState())

export const { resetContacts } = contactsSlice.actions;

export default contactsSlice.reducer;