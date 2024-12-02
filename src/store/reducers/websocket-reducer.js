import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socket_setup: null,
    data_from_socket:{},
    msg_from_socket:{},
    notificatios_from_socket:{},
    messageQueue:[]
}

const component = createSlice({
    name: "websocket",
    initialState,
    reducers: {
        SETUP_SOCKET: (state, { payload }) => {

            console.log("socket_setup", payload, "payload")
            state.socket_setup = payload
        },
        DATA_FROM_SOCKET: (state, { payload }) => {

            console.log("socket_setup", payload, "payload")
            // state.data_from_socket = payload
            state.data_from_socket = {
                ...state.data_from_socket,
                [payload.name]:payload.value
            }
        },
        MSG_FROM_SOCKET: (state, { payload }) => {

            console.log("socket_setup", {...state.msg_from_socket}, "payload")
            // state.data_from_socket = payload
            state.msg_from_socket = {
                ...state.msg_from_socket,
                [payload.name]:state.msg_from_socket[payload.name]?[...state.msg_from_socket[payload.name],payload.value]:[payload.value]
            }
        }, 
        NOTIFICATIONS_FROM_SOCKET: (state, { payload }) => {
            state.notificatios_from_socket= payload;
            console.log("socket_setup", {...state.notificatios_from_socket}, "payload")
            // state.data_from_socket = payload
            state.notificatios_from_socket = {
                ...state.notificatios_from_socket,
                [payload.name]:state.notificatios_from_socket[payload.name]?[...state.notificatios_from_socket[payload.name],payload.value]:[payload.value]
            }
        },
        RESET_STATE: (state) => {
            state.alerts = {};
            state.powerBiReportConf = {};
        }
    }
})

export const { SETUP_SOCKET,DATA_FROM_SOCKET,MSG_FROM_SOCKET, NOTIFICATIONS_FROM_SOCKET } = component.actions
export default component.reducer
