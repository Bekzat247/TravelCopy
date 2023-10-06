import { createSlice } from "@reduxjs/toolkit"
import { fetchHouses, replaceComentById } from "./AsuncThunk"




const mainSLice = createSlice({
    name: 'main', 
    initialState: {
        houses: [],
        statusOfCReatingHouse: 'idle',
        isLoading: true,
    },
    reducers: {
        incremented: (state) => {
            state.value +=10
        },
        decremented: state => {
            state.value -= 10
        },
        setStatusOfFulfiledHouses: (state) => {
            state.statusOfCReatingHouse = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.houses = action.payload
            state.isLoading = false
            console.log(state.houses);
            console.log(action.payload);
        }),
        builder.addCase(replaceComentById.fulfilled, (state, action)=>{
            state.houses.coments = action.payload.coments
            console.log(state.houses.coments);
            console.log(action.payload.data.coments);
        })
    }
})


export const {incremented, decremented,setStatusOfFulfiledHouses } = mainSLice.actions
