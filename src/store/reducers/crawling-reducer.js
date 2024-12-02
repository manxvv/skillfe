import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    crowlingList: [],
    usersList: []
}
const crowlingManagement = createSlice({
    name: "crowlingManagement",
    initialState,
    reducers: {
        CROWLINGLIST: (state, { payload }) => {
            if(payload.reset){
                state.crowlingList = payload.dataAll
            }else{
                state.crowlingList = [...state.crowlingList, ...payload.dataAll];
            }
        },
        RESET_STATE: (state) => {
            state.roleList = [];
            state.usersList = {};
        }
    }
})
export const { CROWLINGLIST,RESET_STATE } = crowlingManagement.actions
export default crowlingManagement.reducer
