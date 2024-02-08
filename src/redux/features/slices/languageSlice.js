import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en'
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeSiteLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { changeSiteLanguage } = languageSlice.actions

export default languageSlice;