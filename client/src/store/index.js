import {createSlice} from "@reduxjs/toolkit";
import reducers from "./reducers.js";

const initialState = {
    mode: "dark",
    token: "",
    userId: "63701cc1f03239b7f700000e"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: { 
        setMode:(state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setToken:(state, action) => {
            state.token = action.payload;
        }
    }
})

export const {setMode, setToken} = globalSlice.actions;  

export default globalSlice.reducer;