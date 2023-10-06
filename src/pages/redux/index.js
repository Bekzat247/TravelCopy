import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchHouses } from "./AsuncThunk";

const mainSLice = createSlice({
    name: 'main', 
    initialState: {
        cards: [],
        isLoading: true
    },
    extraReducers: (builer) => {
        builer.addCase(fetchHouses.fulfilled, (state, action) => {
            state.cards = action.payload
            state.isLoading = false
            
        })
    }
    // extraReducers: (builder) => {
    //     builder.addCase(fetchHouses.fulfilled, (state, action) => {
    //         state.cards = ['hello']
    //         console.log(action.payload);
    //         state.isLoading = false
    //     })
    // }
})

const store = configureStore({
    reducer: mainSLice.reducer,
})


export default store
