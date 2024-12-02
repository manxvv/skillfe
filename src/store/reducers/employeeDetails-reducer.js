import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    empList: [],
    usersList: []

}
const employeeDetailsManagement = createSlice({
    name: "employeeDetailsManagement",
    initialState,
    reducers: {
        EMPLOYEELIST: (state, { payload }) => {
            console.log('jjejejejb bx',payload)
            if(payload.reset){
                state.empList = payload.dataAll
            }else{
                state.empList = [...state.empList, ...payload.dataAll];
            }
        },
        RESET_STATE: (state) => {
            state.roleList = [];
            state.usersList = {};
        }
    }
})
export const { EMPLOYEELIST,RESET_STATE } = employeeDetailsManagement.actions
export default employeeDetailsManagement.reducer
