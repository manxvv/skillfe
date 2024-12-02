
import Button from "../../components/Button"
import Api from "../../utils/api"
import { Urls } from "../../utils/url"
import { DECKLIST } from "../reducers/deckManagement-reducer"
import { CROWLINGLIST } from "../reducers/crawling-reducer"
import CommonActions from "./common-actions"
import swal from "sweetalert"
import { ALERTS } from "../reducers/component-reducer"
const CrawlingAction = {
    getLinkedinList: (reset = true, args = "") => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin")
            const res = await Api.get({ url: `${Urls.linkedin}${args != "" ? "?" + args : ""}` })
            console.log('jnjdhdhhd', res)
            if (res?.status !== 200) return
            const dataAll = res.data.data
            dispatch(CROWLINGLIST({ dataAll, reset }))
        } catch (error) {
            console.log(error, "amit errorerror 37")
            // dispatch(Notify.error('something went wrong! please try again after a while'))
        }
    },
    postLinkedin: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", uniqueId)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.linkedin : Urls.linkedin + "/" + uniqueId })
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
    
}


export default CrawlingAction;