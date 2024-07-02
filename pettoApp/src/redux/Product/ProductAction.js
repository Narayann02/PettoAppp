import React from 'react';
import ApiDataService from '../../services/ApiDataService';
import {SET_PROFILE_DATA} from '../Profile/ProfileActionsTypes';

export const setProfileData = () => {
  try {
    dispatch({type: SET_PROFILE_DATA});
    let url = `user/`;
    ApiDataService.GetTokenapi(url).then(response => {
      console.log('response--------------->', response.data);
      let data = response.data.user_details;
      console.log('dataaaaaaaaaa', data);

      dispatch({type: SET_PROFILE_DATA});
    });
  } catch (error) {
    let datayt = null;
    dispatch({type: SET_PROFILE_DATA});
  }
};
