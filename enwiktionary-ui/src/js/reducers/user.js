import {RECEIVE_USER} from './../actions/types.js' ;

import {SUCCESS, ERROR,
    INVALID, INPROGRESS } from './../actions/fetch-status.js';

export default function user (state= {},  action) {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.user);
    default:
      return state;
  }
};
