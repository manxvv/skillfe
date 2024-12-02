import Api from "../../utils/api"
import { SET_AUTHENTICATED, SET_TOKEN, SET_USER } from "../reducers/auth-reducer"
import { ALERTS, SET_FILE_BLOB } from "../reducers/component-reducer"

const CommonActions = {
    postApiCaller: (urls, data, cb) => async (dispatch, _) => {
        try {
            console.log("CommonPostActions.postApiCaller")
            const res = await Api.post({ url: urls, data })
            if (res?.status !== 201 && res?.status !== 200) {
                let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: res?.data?.msg,
                };
                dispatch(ALERTS(msgdata));
            }else{
                cb()
            }
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    logoutCaller: (cb=()=>{}) => async (dispatch, _) => {
        try {
            // console.log("CommonPostActions.postApiCaller")
            // const res = await Api.post({ url: urls, data })
            // if (res?.status !== 201 && res?.status !== 200) return
            localStorage.setItem("auth", false)
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            dispatch(SET_TOKEN(""))
            dispatch(SET_USER({}))
            dispatch(SET_AUTHENTICATED(false))
            cb()
            // let msgdata = {
            //     show: true,
            //     icon: 'error',
            //     buttons: [
            //     ],
            //     text: "Your Session is Expired"
            // }
            // dispatch(ALERTS(msgdata))
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    getApiCaller: (urls, cb) => async (dispatch, _) => {
        try {
            console.log("CommonPostActions.postApiCaller")
            const res = await Api.get({ url: urls })
            if (res?.status !== 201 && res?.status !== 200) return

            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    deleteApiCaller: (urls, cb) => async (dispatch, _) => {
        try {
            console.log("CommonPostActions.postApiCaller")
            const res = await Api.delete({ url: urls })
            if (res?.status !== 201 && res?.status !== 200) return

            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")

            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    commondownload: (urls, filename, method = "GET", data = {}, cb) => async (dispatch, _) => {
        // (reqUrl, data).then((response) => {
        const res = await Api.blobFile({ url: urls, method: method, data: data })
        console.log(res, "resresresrescommondownload")
        
        const blob = new Blob([res?.data]);
        dispatch(SET_FILE_BLOB(blob));
        // dispatch(SET_FILE_BLOB(new Blob([res?.data])))
        filename = urls.split("/").pop()


        // const url = window.URL.createObjectURL(new Blob([res.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', `${filename}`);
        // document.body.appendChild(link);
        // link.click();
    },
    
}


export default CommonActions;