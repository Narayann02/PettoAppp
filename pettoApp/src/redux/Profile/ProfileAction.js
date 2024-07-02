import { SET_PROFILE_DATA } from './ProfileActionsTypes';
import ApiDataService from '../../services/ApiDataService';
export const setProfileData = () => async (dispatch) => {
    try {
        dispatch({ type: SET_PROFILE_DATA });
        let url = `user/`;
        
        ApiDataService.GetTokenapi(url).then(response => {
            console.log('response---getProfile-------',response.data);
            let data = response.data.user_details;
            console.log('dataaaaaaaaaaaaaaaaa000000000000',data);
            dispatch({ type: SET_PROFILE_DATA, payload: data });
        });
    } catch (error) {
        let datayt = null
        dispatch({ type: SET_PROFILE_DATA, payload: datayt });
    }
};


