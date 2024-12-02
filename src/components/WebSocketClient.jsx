import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import WebsocketActions from '../store/actions/websocket-actions';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../utils/url';
import AuthActions from '../store/actions/auth-actions';
import { SET_USER } from '../store/reducers/auth-reducer';

const WebSocketClient = () => {
    const user = useSelector(state => state.auth?.user)
    // const socket = React.useMemo(() => io('http://127.0.0.1:8095/', {
    //     reconnectionDelay: 10000,
    //     reconnection: Infinity
    // }), [])
    let getUserId = useSelector((state) => {
        let interdata = state?.auth?.user?.id
        return interdata
    })

    let token = useSelector((state) => {
        let tokens = state?.auth?.token || "hiii"
        return tokens
    })

    console.log('tokentoken', token)
    const dispatch = useDispatch()
    useEffect(() => {
        const socket = io.connect(baseUrl, {
            transports: ['websocket', 'polling'],
            query: {
                token: token,
                UserId: getUserId
            }
        })
        socket.on('disconnect', () => {
            console.log("disconnected")
        });
        socket.on('connect', () => {
            console.log("connected ho gya hai")
        });
        socket.on('reconnect', () => {
            console.log("reconnected ho gya hai")
        });
        socket.on('error', () => {
            console.log("error ho gya hai")
        });
        socket.on("get_msg_" + getUserId, (data) => {
            console.log("data aa gya hai", data)
            dispatch(WebsocketActions.msg_from_socket(data))
        });

        // socket.emit("request_user_data"); 
        // console.log('jsjjsjjsjjsjsj')
        // // Listening for the response
        // socket.on("response_user_data", (data) => {
        //     console.log("Received user data:", data);

        //     if (user.error) {
        //         console.error("Error:", data.error);
        //     } else {
        //         // Access the free_trial data
        //         const freeTrial = data.free_trial;
        //         console.log("Free trial status:", freeTrial);
        //         // You can use the freeTrial data as needed in your application
        //     }
        // });



        socket.emit("request_user_data", { token }); 
console.log('Requesting user data with token:', token);

// Listening for the response
socket.on("response_user_data", (data) => {
    console.log("Received user data:", data);

    if (data.error) {
        console.error("Error:", data.error);
    } else {
        const freeTrial = data.free_trial;
        dispatch(SET_USER({
            ...user,
            free_trial : freeTrial
        }))
    }
});


        // socket.on("request_user_data", (data) => {
        //     console.log("data hai kya ..?", data)
        // });
        console.log('nbbbb', socket)
        socket.on("room_names", (data) => {
            console.log("room_names", data)
            // dispatch(WebsocketActions.data_from_socket(data))
        });

        socket.on("notifications", (data) => {
            console.log('hello_hii',data?.data)
            dispatch(WebsocketActions.data_from_socket(data))
            dispatch(WebsocketActions.notifications_from_socket(data))
        });

        dispatch(WebsocketActions.setup_socket(socket))
        // Clean up on component unmount
        return () => {

            // socket.off()
            // socket.disconnect();
        };
    }, []); // Run only once on component mount

    return (<></>);
};

export default React.memo(WebSocketClient);
