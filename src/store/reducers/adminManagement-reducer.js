import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roleList: [],
    agreementList: [],
    usersList: []
}

const adminManagement = createSlice({
    name: "adminManagement",
    initialState,
    reducers: {
        ROLE_LIST: (state, { payload }) => {
            if(payload.reset){
                state.roleList = payload.dataAll
            }else{
                state.roleList = [...state.roleList, ...payload.dataAll];
            }
        },

        USERS_LIST: (state, { payload }) => {
            if(payload.reset){
                state.usersList = payload.dataAll
            }else{
                state.usersList = [...state.usersList, ...payload.dataAll];
            }
        },

        AGREEMENT_LIST: (state, { payload }) => {
            if(payload.reset){
                state.agreementList = payload.dataAll
            }else{
                state.agreementList = [...state.agreementList, ...payload.dataAll];
            }
        },
        

        RESET_STATE: (state) => {
            state.roleList = [];
            state.usersList = {};
            generatedSqlQuery:{}
        }
    }
})

export const { ROLE_LIST, USERS_LIST,AGREEMENT_LIST, RESET_STATE } = adminManagement.actions
export default adminManagement.reducer
