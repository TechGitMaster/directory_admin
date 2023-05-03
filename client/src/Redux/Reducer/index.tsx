import { UPLOAD_EDIT_DELETE_DATA, UPLOAD_EDIT_DELETE_DATA_SUCESS, ERROR_UPLOAD_EDIT_DELETE_DATA, START_UPLOAD_EDIT_DELETE_DATA } from "../Actions";


export const upload_edit_delete_data = (state = { res: UPLOAD_EDIT_DELETE_DATA }, action: any) => {
    switch(action.type){
        case START_UPLOAD_EDIT_DELETE_DATA:
            return { ...state, res: 'start' }
        case UPLOAD_EDIT_DELETE_DATA_SUCESS:
            return { ...state, res: 'success' }
        case ERROR_UPLOAD_EDIT_DELETE_DATA:
            return { ...state, res: 'error' }
        default:
            return state;
    }
}