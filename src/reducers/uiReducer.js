import * as types from '../actions/actionTypes';

// state = [] : Start out with no accounts
export default function ui(state = {
  popUp: {}
}, action){
  switch(action.type){

    case types.SET_CURRENT_TAB: 
      return Object.assign({}, state, {
        currentTab: action.currentTab
      });

    case types.UI_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    case types.IS_SHOW_NAV_BAR: 
      return Object.assign({}, state, {
        showNavBar: action.showNavBar
      });
      
    case types.IS_SHOW_SIDE_BAR: 
      return Object.assign({}, state, {
        showSideBar: action.showSideBar
      });

    case types.IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });

    case types.CREATE_POP_UP:
      return {
        ...state, 
        popUp: {
          ...state.popUp, 
          [action.id]: {
            open: false
          }
        }
      }
    case types.SHOW_POP_UP:
      return {
        ...state,
        popUp: {
          ...state.popUp,
          [action.id]: {
            open: action.open
          }
        }
      };
    case types.REMOVE_POP_UP:
      return {
        ...state,
        popUp: {
          ...state.popUp,
          [action.id]: undefined
        }
      }
    default:
      return state;
  }
}
