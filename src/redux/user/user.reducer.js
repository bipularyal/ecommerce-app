import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null, // this is us initializing the reducer at first
};
const userReducer = (state = INITIAL_STATE, action) => {
  // if we have no state i.e. state we pass as param is null we use intitalstate as default
  // here both state and action are objects ... state holds all current states we have
  // action is an object which holds the new type of action we need to perform and what to change in state as action
  // we use switch-case to check if the action.type matches case we need to change...
  // if action.type matches, with any  case ... we perform an action i.e.  return new state by changing the value of the [key] associated with action.type garda bujhinxa I could not frame it properly in words
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
