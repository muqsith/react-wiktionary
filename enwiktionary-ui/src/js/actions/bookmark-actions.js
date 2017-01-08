import fetch from 'isomorphic-fetch';

import { GET_BOOKMARKS, ADD_BOOKMARK,
  REMOVE_BOOKMARK, RECEIVE_BOOKMARKS,
  RECEIVE_ADD_BOOKMARK, RECEIVE_REMOVE_BOOKMARK } from './types.js' ;

import { SUCCESS, ERROR,
      INVALID, INPROGRESS } from './../actions/fetch-status.js';

export function addBookmark (title) {
    return ( (dispatch, getState) => {
      let userEmail = getEmail(getState());
      if (userEmail) {
        fetch(API_BASE_URL+`/addbookmark?email=${userEmail}&title=${title}`, {
          credentials: 'include', //pass cookies, for authentication
          method: 'GET'
        }).then( (response) => {
          if (response && response.status == 200) {
            dispatch(receiveAddBookmarks(SUCCESS, title));
          }
        }).catch( (ex) => {
          console.log('Error occured while adding bookmark', ex);
        });
      }
    });
};

export function receiveAddBookmarks (status, title) {
    return {
        type: RECEIVE_ADD_BOOKMARK,
        title,
        status
    };
};

export function removeBookmark (title) {
  return ( (dispatch, getState) => {
    let userEmail = getEmail(getState());
    if (userEmail) {
      fetch(API_BASE_URL+`/removebookmark?email=${userEmail}&title=${title}`, {
        credentials: 'include', //pass cookies, for authentication
        method: 'GET'
      }).then( (response) => {
        if (response && response.ok) {
          dispatch(receiveRemoveBookmarks(title));
        }
      }).catch( (ex) => {
        console.log('Error occured while removing bookmark', ex);
      });
    }
  });
};

export function receiveRemoveBookmarks (title) {
    return {
        type: RECEIVE_REMOVE_BOOKMARK,
        title
    };
};

export function getBookmarks () {
  return ( (dispatch, getState) => {
    let userEmail = getEmail(getState());
    if (userEmail) {
      fetch(API_BASE_URL+`/bookmarks?email=${userEmail}`, {
        credentials: 'include', //pass cookies, for authentication
        method: 'GET'
      }).then( (response) => {
        return response.json();
      }).then( (json) => {
        dispatch(receiveBookmarks(json));
      }).catch( (ex) => {
        console.log('Error occured while getting bookmarks', ex);
      });
    }
  });
};

export function receiveBookmarks (bookmarks) {
  return {
    type: RECEIVE_BOOKMARKS,
    status: SUCCESS,
    data: bookmarks
  };
}

function getEmail (state) {
  let userEmail = '';
  if (state && state.user.email) {
    userEmail = state.user.email;
  }
  return userEmail;
}
