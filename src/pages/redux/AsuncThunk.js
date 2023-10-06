import { createAsyncThunk } from "@reduxjs/toolkit"
import Api from "../Api/Api"


export const fetchHouses = createAsyncThunk(
    'main/fetchHouses',
    async () => {
        const resp = await Api.getHouses()
        return resp.data
    }
)
export const deleteHouses = createAsyncThunk(
    'main/deleteHouses',
    async (id) => {
        const res = await Api.deleteHouse(id)
        return res
    }
)

export const createHouses = createAsyncThunk(
    'main/createHouses',
    async (data) => {
        const res = await Api.createHouse(data)
        return res
    }
)

export const replaceComentById = createAsyncThunk(
    'main/replaceComentById',
    async (content) => {
        // const res = await Api.replaceComentById(content.id, content.coments)
        console.log(content.id);
        console.log(content.coments);
    }
)