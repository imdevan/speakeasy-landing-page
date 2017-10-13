import * as types from '../actions/actionTypes';

export default function categories(state = [], action){
  switch(action.type){

    case types.ADD_CATEGORIES:
      return Object.assign({}, state, {
        allCategories: action.categories
      });

    default:
      return state;
  }
}