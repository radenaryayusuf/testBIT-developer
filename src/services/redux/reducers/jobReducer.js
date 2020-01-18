import {
    JOB_FETCH_SUCCEEDED,
    JOB_FETCH_FAILED,
    ON_HIDE_LOADER,
    JOB_ADD,
    JOB_DELETE,
    JOB_UPDATE,

} from '../constants/ActionTypes';

const INIT_STATE = {
    loader: false,
    error: false,
    errormsg: '',
    dataJob: [],
};


export default (state = INIT_STATE, action) =>{
    switch (action.type) {
        case JOB_FETCH_SUCCEEDED:{
            let dataTemp = [];
            action.data.map((item) =>{
                let itemFlag = item;
                itemFlag.flag = false;
                dataTemp.push(itemFlag);
            })
            return {
                ...state,
                dataJob:dataTemp,
                error:false,
                errormsg: '',
            };
        }
        case JOB_FETCH_FAILED:{
            return {
                ...state,
                dataJob:action.data,
                error:false,
                errormsg: '',
            };
        }
        case ON_HIDE_LOADER:{
            return {
                ...state,
                loader: action.payload,
            };
        }
        case JOB_ADD:{
            let tempData = state.dataJob;
            tempData.push(action.data);
            return {
                ...state,
                dataJob: tempData,
            };
        }
        case JOB_DELETE:{
            let dataJobTemp = state.dataJob.filter(x => x.id !== action.data.id);
            return {
                ...state,
                dataJob: dataJobTemp,
            };
        }
        case JOB_UPDATE:{
            let dataJobTemp = state.dataJob;
            let index = dataJobTemp.findIndex(x => x.id === action.data.id);
            dataJobTemp[index] = action.data;
            return {
                ...state,
                dataJob : dataJobTemp,
            };
        }
        default:
            return state;
    }
};

