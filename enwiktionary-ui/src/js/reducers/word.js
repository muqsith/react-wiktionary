import { SEARCH, ADD_BOOKMARK,
  REMOVE_BOOKMARK, RECEIVE_TITLE,
  RESET } from './../actions/types.js' ;

import {SUCCESS, ERROR,
    INVALID, INPROGRESS } from './../actions/fetch-status.js';

export default function word (
    state={ title:'',
      definition:'',
      status: INVALID },
    action) {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, {
        title: action.title,
        status: action.status
      });
    case RECEIVE_TITLE:
      let _definition = action.definition;
      let _status = action.status;
      if (_status !== ERROR
            && (!_definition || _definition === null)) {
        _definition = '<h4> Definition not found </h4>';
        _status = INVALID;
      }
      return Object.assign({}, {
        title: action.title,
        definition: _definition,
        status: _status
      });
    case RESET:
      return Object.assign({}, {
        title: action.title,
        definition: action.definition,
        status: action.status
      });
    default:
      return state;
  }
};
