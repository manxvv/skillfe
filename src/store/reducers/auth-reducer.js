import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    authenticated: Boolean(JSON.parse(localStorage.getItem('authenticated'))),
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    permission: localStorage.getItem('permission') || null,
    profile: {},
    agreementText: {},
    mode: true,
    detail:null
    
};
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_USER: (state, { payload }) => {
            state.user = payload
        },
        SET_TOKEN: (state, { payload }) => {
            state.token = payload
        },
        SET_USER_ROLE: (state, { payload }) => {
            state.userRole = payload
        },
        SET_AUTHENTICATED: (state, { payload }) => {
            state.authenticated = payload
        },
        SET_PERMISSION: (state, { payload }) => {
            state.permission = payload
        },
        USERS_PROFILE: (state, { payload }) => {
            console.log('payloadpayloadpayloadpayload', payload)
            state.profile = payload.dataAll
        },
        USERS_EMAIL: (state, { payload }) => {
            state.users_email = payload
        },
        USERS_BLOG: (state, { payload }) => {
            state.users_blog = payload
        },
        TRANNING_VIDEO: (state, { payload }) => {
            console.log("asfasfasfasf", payload);
            state.tranning_video = payload
        },
        TRAINING_VIDEO_FIRST: (state, { payload }) => {
            console.log("asfasfasfasf", payload);
            state.training_video_first = payload
        },
        FAQS: (state, { payload }) => {
            console.log("sfsfssfsfsfsffaqs", payload?.dataAll);
            state.faqs = payload?.dataAll
        },
        USERS_MOBILE: (state, { payload }) => {
            state.users_mobile = payload
        },
        SET_USER_BUSINESS: (state, { payload }) => {
            state.business = payload.dataAll
        },
        ALL_COUNTRIES: (state, { payload }) => {
            state.countries = payload.dataAll
        },
        AGREEMENT: (state, { payload }) => {
            state.agreementText = payload.dataAll
        },
        NOTIFICATIONS: (state, { payload }) => {
            console.log('notsdfghjklidfghjkficationss', payload)
            console.log("rtyuighjgthyjkvbn", payload?.dataAll?.data);
            state.notifications = payload?.dataAll?.data
        },

        RESET_STATE: (state) => {
            state.authenticated = false;
            state.user = null;
            state.token = null;
            state.permission = null;
        },
        SET_Mode: (state , {payload}) => {
            console.log("afasfsadfassdfsdffasdfasdfasdf",!payload)
            state.mode= !payload
        },

        BOOK: (state, { payload }) => {
            console.log("sfsfssfsfsfsffaqs", payload);
            state.book = payload
        },
        DETAIL: (state, { payload }) => {
            console.log("s__001", payload);
            state.detail = payload
        },
     
    }
})

// const togglebar = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_MODE':
//         return {
//           ...state,
//           mode: action.payload
//         };
//       default:
//         return state;
//     }
//   };
  




export const { SET_USER, SET_TOKEN, GETDETAIL, BOOK,DETAIL, SET_AUTHENTICATED, SET_PERMISSION, SET_USER_ROLE, USERS_PROFILE, RESET_STATE, SET_USER_BUSINESS, ALL_COUNTRIES, AGREEMENT, USERS_EMAIL, USERS_MOBILE, USERS_BLOG, TRANNING_VIDEO, TRAINING_VIDEO_FIRST, FAQS, NOTIFICATIONS, SET_Mode } = auth.actions
export default auth.reducer
