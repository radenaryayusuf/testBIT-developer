import axios from 'axios';
import Api from '../../../config/configip';

import {
    JOB_FETCH_SUCCEEDED,
    JOB_FETCH_FAILED,
    ON_HIDE_LOADER,

} from '../constants/ActionTypes';

export const getDataAllJob = () =>{
    const endPoint = axios.get(`${Api}/posts`);
    return async (dispatch) =>{
        dispatch({
            type: ON_HIDE_LOADER,
            payload : true,
        });
        try {
            const response = await endPoint;
            dispatch({
                type: JOB_FETCH_SUCCEEDED,
                success: true,
                data: response.data,
            });
        } catch (err) {
            dispatch({
                type: JOB_FETCH_FAILED,
                error: true,
                errormsg: err,
            });
        }
        dispatch({
            type: ON_HIDE_LOADER,
            payload: false,
        });
    };
};
