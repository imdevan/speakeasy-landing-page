import * as types from '../actions/actionTypes';

export default function subscribers(state = [], action){
  switch(action.type){

    case types.SUBSCRIBER_COUNT:
      return action.subscribers.total_items;

    case types.ADD_SUBSCRIBER:
      return state + 1;

    default:
      return state;
  }
}