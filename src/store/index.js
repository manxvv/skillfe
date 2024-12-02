import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth-reducer"
import customQuery from "./reducers/customQuery-reducer"
import component from "./reducers/component-reducer"
import alertConfiguration from "./reducers/alertConfiguration-reducer"
import mtandaoComplaints from "./reducers/mtandaoComplaints-reducer"
import isonForm from "./reducers/isonForm-reducer"
import adminManagement from "./reducers/adminManagement-reducer"
import nokiaPrePost from "./reducers/nokiaPrePost-reducer"
import websocket from "./reducers/websocket-reducer"
import deckManagement from "./reducers/deckManagement-reducer";
import OperationManagementReducer from "./reducers/OperationManagement-reducer";
import FundSeekerDetailsReducer from "./reducers/FundSeekerDetails-reducer";
import investorReducer from "./reducers/investor-reducer";
import investmentDetailsReducer from "./reducers/investmentDetails-reducer";
import investmentDiscovery from "./reducers/investmentDiscovery-reducer";
import employeeDetailsManagement from "./reducers/employeeDetails-reducer";
import crawlingReducer from "./reducers/crawling-reducer";
import { bookSession } from "./reducers/sessionSlice";
const store = configureStore({
    reducer: {
        // book,
        auth,
        customQuery,
        component,
        alertConfiguration,
        mtandaoComplaints,
        isonForm,
        adminManagement,
        websocket,
        deckManagement,
        OperationManagementReducer,
        FundSeekerDetailsReducer,
        investorReducer,
        investmentDetailsReducer,
        investmentDiscovery,
        employeeDetailsManagement,
        crawlingReducer 
    },
    devTools: true
})
export default store