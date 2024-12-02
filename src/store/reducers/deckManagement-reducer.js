import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deckList: [],
    usersList: [],
    alldeckList:[]
}
const deckManagement = createSlice({
    name: "deckManagement",
    initialState,
    reducers: {
        DECKLIST: (state, { payload }) => {
            if(payload.reset){
                state.deckList = payload.dataAll
            }else{
                state.deckList = [...state.deckList, ...payload.dataAll];
            }
        },
        ALLDECKLIST: (state, { payload }) => {
            console.log('djjdjdj',payload)
            if(payload.reset){
                state.alldeckList = payload.dataAll
            }
        },
        INVESTOR_INTERESTED_PITCH: (state, { payload }) => {
            console.log('djjdjdj',payload)
            if(payload.reset){
                state.investorInterestedPitchList = payload.dataAll
            }
        },

        RESET_STATE: (state) => {
            state.roleList = [];
            state.usersList = {};
        }
    }
})

export const { DECKLIST,RESET_STATE,ALLDECKLIST,INVESTOR_INTERESTED_PITCH } = deckManagement.actions
export default deckManagement.reducer
