import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

import { UPLOAD_EDIT_DELETE_DATA, UPLOAD_EDIT_DELETE_DATA_SUCESS, ERROR_UPLOAD_EDIT_DELETE_DATA } from '../Actions';

function* uploadDocu({ dataC, token, type }:any): any{
    try{
        let url = 'https://directory-admin.vercel.app/';
        let obj = {
            method: 'POST',
            url: url+'uploadResources',
            params: { /*this is for req.params */ },
            data: { /*this is for req.body */ },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        } as any;

    
        const response = yield call(axios, obj, { withCredentials: true });
        console.log(response.data);

        yield put({ res: 'succes', type: UPLOAD_EDIT_DELETE_DATA_SUCESS })
    }catch(error){
        yield put({ res: 'error', type: ERROR_UPLOAD_EDIT_DELETE_DATA });
    }
}

export function* saga1(){
    yield takeEvery(UPLOAD_EDIT_DELETE_DATA, uploadDocu);
}