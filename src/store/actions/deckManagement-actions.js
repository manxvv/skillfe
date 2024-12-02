
import Button from "../../components/Button"
import Api from "../../utils/api"
import { Urls } from "../../utils/url"
import { DECKLIST } from "../reducers/deckManagement-reducer"
import CommonActions from "./common-actions"
import { ALLDECKLIST } from "../reducers/deckManagement-reducer"
import { INVESTOR_INTERESTED_PITCH } from "../reducers/deckManagement-reducer"
import swal from "sweetalert"
import { ALERTS } from "../reducers/component-reducer"
const DeckManagementActions = {
    getDeckList: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin")
            const res = await Api.get({ url: `${Urls.pitchdeck}${args != "" ? "?" + args : ""}` })
            console.log('jnjdhdhhd', res)
            if (res?.status !== 200) return
            const dataAll = res.data.data
            dispatch(DECKLIST({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postPitchDeck: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId,data,'jdjdjdj',cb)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.pitchdeck : Urls.pitchdeck + "/" + uniqueId, contentType: "multipart/form-data" })
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
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    postNewProject: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId,data,'jdjdjdj',cb)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.addNewProject : Urls.addNewProject + "/" + uniqueId, contentType: "multipart/form-data" })
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
    getAllPitchDeck: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin")
            const res = await Api.get({ url: `${Urls.Allpitchdeck}${args != "" ? "?" + args : ""}` })
            console.log('jnjdhdhhd', res)
            if (res?.status !== 200) return
            const dataAll = res.data.data
            dispatch(ALLDECKLIST({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postAllPitchDeck: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.Allpitchdeck : Urls.Allpitchdeck + "/" + uniqueId, contentType: "multipart/form-data" })
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
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
            return;
        }
    },
    postStatus: (data, uniqueId, cb) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId)
            const res = await Api.post({ data: data, url: Urls.approveStatus + "/" + uniqueId })
            // window.location.reload();
            console.log(res,'ressjjsjdj')
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
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: "You have successfully accepted this pitch",
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
    postInterest: (data, uniqueId, cb) => async (dispatch, _) => {
        try {
            console.log("Aasdfsfasfsdgsdsdg", uniqueId, data)
            const res = await Api.post({ data: data, url: Urls.showInterest + "/" + uniqueId })
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
                    text: "Thanks for showing Interest",
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
    getInvestorInterestedPitch: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("gesdfsfaksfklaasdfasfd")
            const res = await Api.get({ url: `${Urls.showInterest}${args != "" ? "?" + args : ""}` })
            console.log('jnjdhdfsfsdfsdfsdhhd', res)
            if (res?.status !== 200) return 
            const dataAll = res.data.data
            dispatch(INVESTOR_INTERESTED_PITCH({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postFundseekerStatus: (data, uniqueId, cb) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId)
            const res = await Api.post({ data: data, url: Urls.showInterest + "/" + uniqueId })
            // window.location.reload();
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
    // postRole: (reset, data, cb, uniqueId) => async (dispatch, _) => {
    //     try {
    //         console.log("AuthActions.signin", uniqueId)
    //         let res
    //         if(uniqueId==null){
    //             res = await Api.post({ data: data, url: Urls.admin_roleList })
    //         }else{
    //             res = await Api.put({ data: data, url: Urls.admin_roleList + "/" + uniqueId })
    //         }
    //         if (res?.status !== 201 && res?.status !== 200) return
    //         cb()
    //     } catch (error) {
    //         console.log(error, "amit errorerror 37")
    //     }
    // }
}


export default DeckManagementActions;