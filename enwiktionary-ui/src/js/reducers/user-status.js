import { SHOW_SIGNIN, SIGNIN_INIT,
  SIGNIN_SUCCESS, SIGNUP_SUCCESS,
  SIGNIN_FAILED, SHOW_SIGNUP,
  SIGNUP_INIT, SIGNUP_FAILED } from './../actions/types.js' ;

import {SUCCESS, ERROR,
    INVALID, INPROGRESS } from './../actions/fetch-status.js';

export default function userstatus ( state= { signin: INVALID,
                                                signup: INVALID },
                                      action) {
  switch (action.type) {
    case SHOW_SIGNIN:
      return Object.assign({}, state, {
        signin: action.signin
      });
    case SIGNIN_INIT:
      return Object.assign({}, state, {
        signin: action.signin
      });
    case SIGNIN_FAILED:
      return Object.assign({}, state, {
        signin: action.signin
      });
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        signin: action.signin
      });
    case SHOW_SIGNUP:
      return Object.assign({}, state, {
        signup: action.signup
      });
    case SIGNUP_INIT:
      return Object.assign({}, state, {
        signup: action.signup
      });
    case SIGNUP_FAILED:
      return Object.assign({}, state, {
        signup: action.signup
      });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signup: action.signup
      });
    default:
      return state;
  }
};
