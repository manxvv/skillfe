
import Button from "../../components/Button"
import Api from "../../utils/api"
import { Urls } from "../../utils/url"
import { USERS_LIST,RESET_STATE, KYC_STATUS } from "../reducers/FundSeekerDetails-reducer"
import CommonActions from "./common-actions"
// import Notify from "./notify-actions"
const FundSeekerDetailsActions = {
    getInvestmentDetailsList: (reset=true,args="") => async (dispatch, _) => {
        try {
            const res = await Api.get({ url: `${Urls.investmentDetails}${args!=""?"?"+args:""}`})
            if (res?.status !== 200) return
            const dataAll = res.data.data
            console.log(dataAll,'jdjdjjd')
            dispatch(USERS_LIST({dataAll,reset}))
        } catch (error) {
            console.log(error, "amit errorerror 37") 
        }
    },
    postInvestmentDetailsList: (reset, data, cb,uniqueId) => async (dispatch, _) => {
        console.log(uniqueId,data,'djdhhhhhhfhf')
        try {
            console.log("AuthActions.signin", uniqueId)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.investmentDetails : Urls.investmentDetails + "/" + uniqueId })
            if (res?.status !== 201 && res?.status !== 200) return
            cb()
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    // postPitchDeck: (reset, data, cb, uniqueId) => async (dispatch, _) => {
    //     try {
    //         console.log("AuthActions.signin", uniqueId)
           
    //         const res = await Api.post({ data: data, url: uniqueId == null ? Urls.admin_userList : Urls.admin_userList + "/" + uniqueId })
    //         if (res?.status !== 201) return
    //         cb()
    //     } catch (error) {
    //         console.log(error, "amit errorerror 37")
    //     }
    // },
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
export default FundSeekerDetailsActions;