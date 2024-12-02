import { Navigate } from "react-router-dom"
import Api from "../../utils/api"
import { Urls } from "../../utils/url"
import { SET_AUTHENTICATED, DETAIL,GETDETAIL, SET_PERMISSION, SET_TOKEN, SET_USER, USERS_PROFILE, SET_USER_ROLE, SET_USER_BUSINESS, ALL_COUNTRIES, AGREEMENT, USERS_MOBILE, USERS_EMAIL, USERS_BLOG, TRANNING_VIDEO, TRAINING_VIDEO_FIRST, FAQS, NOTIFICATIONS,SET_Mode ,BOOK } from "../reducers/auth-reducer"
import { ALERTS } from "../reducers/component-reducer";
import { configureStore } from "@reduxjs/toolkit";
// import Notify from "./notify-actions"
const AuthActions = {

    signIn: (data, cb) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin")
            const res = await Api.post({ url: Urls.login, data })
            console.log(res?.status, "res?.statusres?.status")
            if (res?.status == 400) {
                console.log(res?.data, "401401401")
                let msgdata = {
                    show: true,
                    icon: 'error',
                    text: res?.data?.msg,
                    type: 1
                }
                dispatch(ALERTS(msgdata))
                return
            }
            if (res?.status == 200) {
                console.log(res.data, "res.data")
                const user = res.data.data
                console.log(user, user, res.data, "res.data")
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', user.idToken)
                console.log(user.permission,"____userpermission____")
                localStorage.setItem('permission', user.permission)
                localStorage.setItem('auth', true)
                dispatch(SET_TOKEN(user.idToken))
                dispatch(SET_PERMISSION(JSON.stringify(user.permission)))
                dispatch(SET_USER(user))
                dispatch(SET_AUTHENTICATED(true))
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    register: (data, cb) => async (dispatch, _) => {
        try {
            const res = await Api.post({ data: data, url: Urls.register })
            let dtaa = res?.data
            console.log("asdfasfasfasdfasfdasfasdfadfsadsf", dtaa.data.icon);
            let msgdata = {
                show: true,
                icon: dtaa.data.icon,
                buttons: [
                ],
                type: 1,
                text: dtaa.msg
            }
            dispatch(ALERTS(msgdata))
            if (res?.status !== 201 && res?.status !== 200) return
            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    businessRegister: (data, cb) => async (dispatch, _) => {
        try {
            const res = await Api.post({ data: data, url: Urls.businessRegister })
            let dtaa = res?.data
            let msgdata = {
                show: true,
                icon: dtaa.icon,
                buttons: [
                ],
                type: 1,
                text: dtaa.msg
            }
            dispatch(ALERTS(msgdata))
            if (res?.status !== 201 && res?.status !== 200) return
            dispatch(USERS_EMAIL(res?.data?.email))
            dispatch(USERS_MOBILE(res?.data?.mobile))

            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },

    postsetupRegistration: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", data)
            //const res = await Api.post({ data: data, url: uniqueId == null ? Urls.setupRegistration : Urls.setupRegistration + "/" + uniqueId,contentType:"multipart/form-data" })
            const res = await Api.post({ data: data, url: Urls.setupRegistration, contentType: "multipart/form-data" })
            console.log(res, 'jsjjjsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            } else {
                console.log(res.data, 'jdjhhjjdjd')
                dispatch(SET_USER_ROLE(res?.data?.role))
                dispatch(SET_USER_BUSINESS(data))
                dispatch(USERS_EMAIL(res?.data?.email))
                dispatch(USERS_MOBILE(res?.data?.mobile))
                cb()
            }

        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    setuppassword: (data, userRole, cb, failcb) => async (dispatch, _) => {
        try {
            console.log(userRole, 'jfjfjjfj')
            data['roleName'] = userRole;
            const res = await Api.post({ data: data, url: Urls.setuppassword_stepOne })
            let dtaa = res?.data
            console.log(res, 'jfjfjfjfjjfj')
            let msgdata = {
                show: true,
                icon: 'success',
                buttons: [
                ],
                type: 1,
                text: dtaa.msg
            }
            dispatch(ALERTS(msgdata))

            if (res?.status !== 200) {
                failcb()
            } else {
                console.log(dtaa, 'hdhdhhdhhdhhd')
                dispatch(SET_USER_ROLE(dtaa?.role))
                dispatch(USERS_EMAIL(dtaa?.email))
                dispatch(USERS_MOBILE(dtaa?.mobile))
                dispatch(TRAINING_VIDEO_FIRST(dtaa?.tranningVideoData))
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            //dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    kycregiter: (data, cb, failcb) => async (dispatch, _) => {
        try {
            const res = await Api.post({ data: data, url: Urls.KycRegister })
            let dtaa = res?.data
            let msgdata = {
                show: true,
                icon: dtaa.icon,
                buttons: [
                ],
                type: 1,
                text: dtaa.msg
            }
            dispatch(ALERTS(msgdata))
            if (res?.status !== 200) {
                failcb()
            } else {
                dispatch(SET_USER_ROLE(dtaa?.role))
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    // profile: (uid) => async (dispatch, _) => {
    //     try {
    //         const res = await Api.get({ url: Urls.profile + '/' +uid })
    //         if (res?.status !== 200) return
    //         const dataAll = res?.data?.data[0]
    //         console.log('hhshshs', dataAll)
    //         dispatch(USERS_PROFILE({ dataAll }))
    //     } catch (error) {
    //         console.log(error, "amit errorerror 37")
    //     }
    // },
    profile: () => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: Urls.profile })
            if (res?.status !== 200) return
            const dataAll = res?.data?.data[0]
            console.log('hhshshs', dataAll)
            dispatch(USERS_PROFILE({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    dynamicProfile: (uid) => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: Urls.profile + '/' +uid })
            if (res?.status !== 200) return
            const dataAll = res?.data?.data[0]
            console.log('hhshshs', dataAll)
            dispatch(USERS_PROFILE({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },

    sendMail: (data, cb) => async (dispatch, _) => {
        try {
            const res = await Api.post({ data: data, url: Urls.sendMail })
            let dtaa = res?.data
            let msgdata = {
                show: true,
                icon: dtaa.icon,
                buttons: [

                ],
                type: 1,
                text: dtaa.msg
            }
            dispatch(ALERTS(msgdata))


            if (res?.status !== 200) {
                failcb()
            } else {
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postProfile: (data, cb, uniqueId) => async (dispatch, _) => {
        try {
            // console.log("AuthActions.signin", cb)
            // if(reset){
            //     dispatch(GENERATED_SQL_QUERY({}))
            // }
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.profile : Urls.profile })
            console.log(res, 'jsjjjsjh')

            if (res?.status !== 201 && res?.status !== 200) return
            const allData = res?.data
            dispatch(SET_USER_ROLE(allData?.role))
            console.log('called..................................................')
            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postProfileDocuments: (data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId)
            // if(reset){
            //     dispatch(GENERATED_SQL_QUERY({}))
            // }
            const res = await Api.put({ data: data, url: uniqueId == null ? Urls.profile : Urls.profile, contentType: "multipart/form-data" })
            console.log(res, 'jsjjjsjh')
            if (res?.status !== 201 && res?.status !== 200) return
            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    getblogs: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("jjdnnnnnnn")
            const res = await Api.get({ url: `${Urls.blogs}${args != "" ? "?" + args : ""}` })
            if (res?.status !== 200) return
            console.log(res, 'jjjdjdj')
            const dataAll = res.data.data
            dispatch(USERS_BLOG({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postblogs: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.blogs : Urls.blogs + "/" + uniqueId, contentType: "multipart/form-data" })
            console.log(res, 'jsjjjnsnnhsjh')
            if ((res?.status !== 201 && res?.status !== 200)) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: "Please upload blog Image",
                };
                dispatch(ALERTS(msgdata));
            } else {
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    getTranningVideo: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("jjdnnnnnnn")
            const res = await Api.get({ url: `${Urls.tranningVideo}${args != "" ? "?" + args : ""}` })
            if (res?.status !== 200) return
            console.log(res, 'jjjdjdj')
            const dataAll = res.data.data
            dispatch(TRANNING_VIDEO({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    postTranningVideo: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.tranningVideo : Urls.tranningVideo + "/" + uniqueId, contentType: "multipart/form-data" })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            } else {
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    getcountries: () => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: Urls.getCountries })
            console.log(res, 'sjjdjdjhdhdh')
            if (res?.status !== 200) return
            const dataAll = res?.data?.data[0]
            dispatch(ALL_COUNTRIES({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },


    getAgreement: (roleName) => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: Urls.agreement_byrole + roleName })
            console.log(res, 'sjjdjdjhdhdh')
            if (res?.status !== 200) return
            const dataAll = res?.data?.data[0]
            dispatch(AGREEMENT({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    postFaqs: (data, cb) => async (dispatch, _) => {
        try {
            // console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: Urls.faqs })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            } else {
                let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    // text: res?.data?.msg,
                    text: "Your Query Added Successfully",
                };
                dispatch(ALERTS(msgdata));
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    getFaqs: (reset = true) => async (dispatch, _) => {
        try {
            console.log("jjdnnnnnnn")
            const res = await Api.get({ url: Urls.faqs })
            if (res?.status !== 200) return
            console.log(res, 'jjjdsfsdfsfdsfjdj')
            const dataAll = res.data.data
            dispatch(FAQS({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    postFaqsAns: (data, cb) => async (dispatch, _) => {
        try {
            // console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: Urls.faqsAns + "/" + data?.qid })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            } else {
                let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    // text: res?.data?.msg,
                    text: "Thanks For Reply",
                };
                dispatch(ALERTS(msgdata));
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    notifications: () => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: Urls.notifications })
            if (res?.status !== 200) return
            const dataAll = res?.data
            console.log('hhshshs', dataAll)
            dispatch(NOTIFICATIONS({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    postSeenNotifications: (data, cb) => async (dispatch, _) => {
        try {
            // console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: Urls.notifications })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },

    // send otp
    postOTP: (data, cb) => async (dispatch, _) => {
        try {
            // console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: Urls.send_OTP })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: "Please Enter a valid Email",
                };
                dispatch(ALERTS(msgdata));
            }
            else {
                let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: "Otp Sent Successfully",
                };
                dispatch(ALERTS(msgdata));
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },

    // verify otp
    verifyOTP: (data, cb) => async (dispatch, _) => {
        try {
            // console.log("njjd", data, uniqueId)
            const res = await Api.post({ data: data, url: Urls.verify_OTP })
            console.log(res, 'jsjjjnsnnhsjh')
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            }
            else {
                let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
                cb()
            }


        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    // verify otp
    toggleButton: (data) => async (dispatch, _) => {
        try {
            console.log("fdfddfdfsfsfsffdfdfdfd",data)
            dispatch(SET_Mode(data))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            return;
        }
    },
    
    mentorForm: (data, cb) => async (dispatch, _) => {
        try {
            console.log("AuthActions.mentorForm")
            const res = await Api.post({ url: Urls.book, data })
            console.log(res?.status, "res?.statusres?.status")
            if (res?.status == 400) {
                console.log(res?.data, "401401401")
                let msgdata = {
                    show: true,
                    icon: 'error',
                    text: res?.data?.msg,
                    type: 1
                }
                dispatch(ALERTS(msgdata))
                return
            }
            if (res?.status == 200) {
                console.log(res.data, "res.data")
                const user = res.data.data
                console.log(user, user, res.data, "res.data123")
                // localStorage.setItem('user', JSON.stringify(user))
                // localStorage.setItem('token', user.idToken)
                // console.log(user.permission,"____userpermission____")
                // localStorage.setItem('permission', user.permission)
                // localStorage.setItem('auth', true)
                // dispatch(SET_TOKEN(user.idToken))
                // dispatch(SET_PERMISSION(JSON.stringify(user.permission)))
                // dispatch(SET_USER(user))
                // dispatch(SET_AUTHENTICATED(true))
                dispatch(BOOK(user))
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    detail: (data, cb) => async (dispatch, _) => {
        try {
            console.log("AuthActionsy" ,AuthActions.detail)
            const res = await Api.post({ url: Urls.detail, data })
            console.log(res?.status, "res?.statusres?.status")
            if (res?.status == 400) {
                console.log(res?.data, "401401401")
                let msgdata = {
                    show: true,
                    icon: 'error',
                    text: res?.data?.msg,
                    type: 1
                }
                dispatch(ALERTS(msgdata))
                return
            }
            if (res?.status == 200) {
                console.log(res.data, "res.data")
                const user = res.data.data
                console.log(user, user, res.data, "res.data123")
                // localStorage.setItem('user', JSON.stringify(user))
                // localStorage.setItem('token', user.idToken)
                // console.log(user.permission,"____userpermission____")
                // localStorage.setItem('permission', user.permission)
                // localStorage.setItem('auth', true)
                // dispatch(SET_TOKEN(user.idToken))
                // dispatch(SET_PERMISSION(JSON.stringify(user.permission)))
                // dispatch(SET_USER(user))
                // dispatch(SET_AUTHENTICATED(true))
                dispatch(DETAIL(user))
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },

    detailget: () => async (dispatch, _) => {
        try {   
            const res = await Api.get({ url: Urls.detail })
            if (res?.status !== 200) return
            const dataAll = res?.data
            console.log('hhshshs', dataAll)
            dispatch(DETAIL({ dataAll }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    

}




export default AuthActions; 