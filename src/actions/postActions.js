import * as constants from './actionTypes';
import * as ui from './uiActions';
// import {apiUrl} from '../config/config';
import Axios from '../config/axios';

const apiUrl = '/api';

export function successRequestingPosts(response){
  return { type: constants.ADD_POSTS, posts: response.data};
}

export function successPostingComment(response){
  return {type: constants.ADD_COMMENT, comment: response.data.response}
}

function successRequestingPost(response){
  if(response.data.length > 0)
    return { type: constants.ADD_POST, post: response.data[0]};
  else
    return {type: constants.ERROR_REDIRECT_404}
}

export function removePost(){
  return {type: constants.REMOVE_POST}
}

// THUNKS HERE
export function submitNewComent(post, comment){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));
    let requestUrl = `${apiUrl}/posts/${post.id}/comments`
    return Axios.post(requestUrl, {
      email: comment.email,
      name: comment.name,
      body: comment.body
    }).then(
      response => dispatch(successPostingComment(response))
    ).then(
      response => dispatch(ui.loadingChanged(false))
    ).catch(
      e => dispatch(ui.loadingChanged(false))
    )
  }
}
export function requestAllPosts(){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));
    let requestUrl = `${apiUrl}/posts`;
    // let requestUrl = '/posts'
    return Axios.get(requestUrl).then(
      response => {
        dispatch(successRequestingPosts(response))
      }
    ).then(
      response => {
        dispatch(ui.loadingChanged(false))
      }
    ).catch(e => {
        dispatch(ui.displayError(e.response.data.response.detail))
        dispatch(ui.loadingChanged(false))
      }
    )
  }
}

export function requestPost(slug){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));
    // let requestUrl = '/posts/' + slug;
    let requestUrl = `${apiUrl}/posts?slug=${slug}`;
    return Axios.get(requestUrl).then(
      response => dispatch(successRequestingPost(response))
    ).then(
      response => dispatch(ui.loadingChanged(false))
    ).catch(
      error => dispatch(ui.displayError(error.response.data.response.detail)), dispatch(ui.loadingChanged(false))
    )
  }
}

export function requestPostBySlug(slug){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));
    // let requestUrl = '/posts/' + slug;
    let requestUrl = `${apiUrl}/posts?slug=${slug}`;
    return Axios.get(requestUrl).then(
      response => dispatch(successRequestingPost(response))
    ).catch(
      error => console.error('ERROR: ', error)
    )
  }
}
