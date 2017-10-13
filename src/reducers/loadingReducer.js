import * as types from '../actions/actionTypes';
// import update from 'immutability-helper';

// state = [] : Start out with no accounts
export default function loading(state = [], action){
  switch(action.type){

    case types.IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    default:
      return state;
  }
}