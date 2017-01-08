import fetch from 'isomorphic-fetch';

import { SEARCH, RECEIVE_TITLE,
  FETCH_WORD, RESET } from './types.js' ;

import { SUCCESS, ERROR,
      INVALID, INPROGRESS } from './../actions/fetch-status.js';

export function search (title) {
  return {
      type: SEARCH,
      status: INPROGRESS,
      title
  };
};

export function receiveTitle (title, error, word) {
  return {
      type: RECEIVE_TITLE,
      title,
      ['status']: (error) ? ERROR : SUCCESS,
      definition: (error) ? error : word.definition
  };
};


export function fetchWord (title) {
  return function (dispatch, getState) {
    dispatch(search(title));
    fetch(API_BASE_URL+`/word?title=${title}`, {
      credentials: 'include', //pass cookies, for authentication
      method: 'GET'
    })
      .then( (response) => { return response.json() } )
      .then( (json) => {
        dispatch(receiveTitle(title, undefined, json));
      } )
      .catch( (ex) => {
        dispatch(receiveTitle(title, ex, undefined))
      } )
      ;
  };
};

export function reset () {
  return {
    type: RESET,
    title:'',
    status: INVALID,
    definition: ''
  }
}
