
import Button from "../../components/Button"
import Api from "../../utils/api"
import { Urls } from "../../utils/url"

import CommonActions from "./common-actions"
import swal from "sweetalert"
import { ALERTS } from "../reducers/component-reducer"
import { EMPLOYEELIST } from "../reducers/employeeDetails-reducer" 
const EmployeeManagementActions = {
    getEmployeeList: (reset=true,args="") => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin")
            const res = await Api.get({ url: `${Urls.employeeDetails}${args!=""?"?"+args:""}`})
            if (res?.status !== 200) return
            const dataAll = res?.data?.data
            console.log(dataAll,'jjjdhdhhdhdh')
            // console.log(dispatch(EMPLOYEELIST({dataAll,reset})),'jjmmdmmjdhdhhdhdh')
            dispatch(EMPLOYEELIST({dataAll,reset}))
        } catch (error) {
            console.log(error, "amit errorerror 37")
        }
    },
    postEmployeeDetails: (reset, data, cb, uniqueId) => async (dispatch, _) => {
        try {
            console.log("AuthActions.signin", data)
            const res = await Api.post({ data: data, url: uniqueId == null ? Urls.employeeDetails : Urls.employeeDetails + "/" + uniqueId})
            console.log(res,'jsjjjsjhasdad')
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
            return;
        }
    },
}
export default EmployeeManagementActions;