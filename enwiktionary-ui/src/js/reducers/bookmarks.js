import { RECEIVE_BOOKMARKS, RECEIVE_ADD_BOOKMARK,
    RECEIVE_REMOVE_BOOKMARK } from './../actions/types.js' ;

import {SUCCESS, ERROR,
    INVALID, INPROGRESS } from './../actions/fetch-status.js';

export default function bookmarks (state={status:INVALID, data:[]}, action) {
  switch (action.type) {
    case RECEIVE_ADD_BOOKMARK:
      if (state.data.indexOf(action.title) === -1) {
        return Object.assign({},
            { status: action.status, data:[...state.data, action.title] });
      } else {
        return state;
      }
    case RECEIVE_REMOVE_BOOKMARK:
      let index = state.data.indexOf(action.title);
      if (index !== -1) {
        return Object.assign({}, state,
            { data: []
              .concat(state.data.slice(0, index))
              .concat(state.data.slice(index+1)) });
      } else {
        return state;
      }
    case RECEIVE_BOOKMARKS:
      return Object.assign({}, {status:action.status},
          {data:action.data});
    default:
      return state;
  };
};
