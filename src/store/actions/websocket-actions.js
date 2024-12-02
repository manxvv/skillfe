import { DATA_FROM_SOCKET, MSG_FROM_SOCKET, NOTIFICATIONS_FROM_SOCKET, SETUP_SOCKET } from "../reducers/websocket-reducer";


const WebsocketActions = {
    setup_socket: (data) => async (dispatch, _) => {
        try {
            // console.log("SETUP_SOCKET","state")
            dispatch(SETUP_SOCKET(data))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    }, 
    send_to_socket: (label,msg,roomName=true) => async (dispatch, state) => {
        try {
            console.log("SETUP_SOCKET",label,msg,state()?.auth?.user?.id,"state")
           
            if (state().websocket.socket_setup.connected) {
                if (roomName) {
                    // Emit message to the specified room
                    state().websocket.socket_setup.emit(label, { 
                        room_name: "room_name_" + state()?.auth?.user?.id, // Construct room name based on user ID
                        message: msg // The message to emit
                    });
                } else {
                    // Emit message without specifying a room
                    state().websocket.socket_setup.emit(label, { 
                        message: msg // The message to emit
                    });
                }
            } else {
                // If websocket connection is not established, add message to the queue
                const messageQueue = state().websocket.messageQueue || [];
                messageQueue.push({ label, roomName, msg });
                state().websocket.messageQueue = messageQueue;
            }
            
            // Function to send queued messages when reconnected
            function sendQueuedMessages() {
                const messageQueue = state().websocket.messageQueue || [];
                while (messageQueue.length > 0) {
                    const { label, roomName, msg } = messageQueue.shift();
                    if (state().websocket.socket_setup.connected) {
                        if (roomName) {
                            // Emit message to the specified room
                            state().websocket.socket_setup.emit(label, { 
                                room_name: "room_name_" + state()?.auth?.user?.id, // Construct room name based on user ID
                                message: msg // The message to emit
                            });
                        } else {
                            // Emit message without specifying a room
                            state().websocket.socket_setup.emit(label, { 
                                message: msg // The message to emit
                            });
                        }
                    } else {
                        // If still not connected, re-add the message to the queue
                        messageQueue.unshift({ label, roomName, msg });
                        break; // Stop processing further messages until reconnected again
                    }
                }
                state().websocket.messageQueue = messageQueue;
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    data_from_socket: (data) => async (dispatch, _) => {
        try {
            console.log("data_from_socket","data",data,data?.que?.Code+"_"+data?.que?.id,{"data":data?.data,"columns":data?.columns})
            dispatch(DATA_FROM_SOCKET({"name":data?.que?.Code+"_"+data?.que?.id,"value":{"data":data?.data,"columns":data?.columns}}))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    msg_from_socket: (data) => async (dispatch, _) => {
        try {
            console.log("data_from_socket","data",{"name":data["rId"],"value":data["message"]})
            let detw={
                "value":data["message"],
                "sId":data["sId"] 
            }
            dispatch(MSG_FROM_SOCKET({"name":data["rId"],"value":data}))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    notifications_from_socket: (data) => async (dispatch, _) => {
        try {
            // console.log("notifications_from_socket","data",{"name":data["rId"],"value":data["message"]})
            // let detw={
            //     "value":data["message"],
            //     "sId":data["sId"] 
            // } 
            dispatch(NOTIFICATIONS_FROM_SOCKET(data))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
}


export default WebsocketActions;