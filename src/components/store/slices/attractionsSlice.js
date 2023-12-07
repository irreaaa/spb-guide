import {createSlice} from "@reduxjs/toolkit";
import data from "../../../json/spbPlaces.json"


const initialState = {
    attractionsList: data,
    pageSize: 5,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    type: "all"
}

const attractionsSlice = createSlice({
    name: "attractions",
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload.currentPage
        },
        setType(state, action) {
            state.type = action.payload.type
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload.totalCount
        }
    }
})

export const {setCurrentPage, setType, setTotalCount} = attractionsSlice.actions

export default attractionsSlice.reducer