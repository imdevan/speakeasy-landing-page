import * as constants from './actionTypes';
import * as ui from './uiActions';

import Axios from '../config/axios';
// import {apiUrl} from '../config/config';
const apiUrl = '/api';

export function successRequestingSubscribers(response){
  return { type: constants.SUBSCRIBER_COUNT, subscribers: response.data.response};
}

export function successRequestingAddSubscriber(response){
  return { type: constants.ADD_SUBSCRIBER};
}

// THUNKS HERE
export function requestMailchimpSubscribers(){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));

    let requestUrl = `${apiUrl}/subscribers`
    return Axios.get(requestUrl).then(
      response => dispatch(successRequestingSubscribers(response))
    ).then(
      response => dispatch(ui.loadingChanged(false))
    ).catch(
      error => dispatch(ui.displayError(error.response.data.response.detail)), dispatch(ui.loadingChanged(false))
    )
  }
}

export function requestAddMailchimpSubscriber(email, name, reference, funnel) {
  return function(dispatch){
    dispatch(ui.loadingChanged(true));

    let requestUrl = `${apiUrl}/subscribers`;
    return Axios({
      method: 'post',
      url: requestUrl,
      data: {
        email,
        name,
        reference,
        funnel
      }
    }).then(
      response => dispatch(successRequestingAddSubscriber(response))
    ).then(
      response => dispatch(ui.loadingChanged(false))
    ).catch(
      error => dispatch(ui.displayError(error.response.data.response.detail)), dispatch(ui.loadingChanged(false))
    );
  }
}
