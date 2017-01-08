import fetch from 'isomorphic-fetch';
import $ from 'jquery';

import { SIGNIN, SIGNIN_INIT, SIGNIN_FAILED,
    SIGNIN_SUCCESS, SIGNUP_SUCCESS,
    SIGNUP, SIGNUP_INIT, SIGNUP_FAILED,
    SIGNOUT, GET_USER, RECEIVE_USER } from './types.js' ;

import { SUCCESS, ERROR,
      INVALID, INPROGRESS } from './../actions/fetch-status.js';

import { getBookmarks } from './bookmark-actions.js';

export function signinInit () {
  return {
    type: SIGNIN_INIT,
    signin: INPROGRESS
  };
};

export function signinFailed () {
  return {
    type: SIGNIN_FAILED,
    signin: ERROR
  };
};

export function signinSuccess () {
  return {
    type: SIGNIN_SUCCESS,
    signin: SUCCESS
  };
};

export function showSignin () {
  return {
    type: SHOW_SIGNIN,
    signin: INVALID
  };
};

export function signin (creds) {
  return ((dispatch, getState) => {
    dispatch(signinInit());

    fetch(LOGIN_API_BASE_URL+`/signin`, {
      method: 'POST',
      headers: {
        ['Authorization']: 'Basic '+creds
      }
    }).then( (response) => {
      if (response.status == 200) {
        dispatch(signinSuccess());
        if (['localhost', '127.0.0.1'].indexOf(location.hostname) !== -1) {
            let jwtToken = response.headers.get('X-Jwt-Token');
            let jwtCookie = "X-Jwt-Token"+"="+jwtToken+";Max-Age=31536000;"
            document.cookie = jwtCookie;
        }
        return response.text();
      } else {
        dispatch(signinFailed());
      }
    }).then( (text) => {
      console.log(`User login: ${text}`);
    }).catch( (ex) => {
      console.log(ex);
      dispatch(signinFailed());
      // TODO
      //dispatch(showSignup());
    });
  });
};

export function signupInit () {
  return {
    type: SIGNUP_INIT,
    signup: INPROGRESS
  };
};

export function signupFailed () {
  return {
    type: SIGNUP_FAILED,
    signup: ERROR
  };
};

export function signupSuccess () {
  return {
    type: SIGNUP_FAILED,
    signup: SUCCESS
  };
};

export function showSignup () {
  return {
    type: SHOW_SIGNUP,
    signup: ERROR
  };
};

export function signup () {
  return {};
};

export function signout () {
  return {};
};

export function receiveUser (userObject) {
  return {
    type: RECEIVE_USER,
    user: userObject
  }
};

export function createAnonymousUser () {
  return ( (dispatch, getState) => {
    fetch(LOGIN_API_BASE_URL+`/create-anoymous-user`, {
      credentials: 'include',
      method: 'GET'
    }).then( (response) => {
      return response.json();
    }).then( (json) => {
      dispatch(receiveUser(json));
      dispatch(signin(btoa(json.email+':'+json.password)))
    }).catch( (ex) => {
      console.log('Failed to create anonymous user', ex);
    });
  } );
}

// just another action like fetchword
export function getUser () {
  return ((dispatch, getState) => {
    fetch(API_BASE_URL+`/user`, {
      credentials: 'include',
      method: 'GET'
    }).then( (response) => {
      if (response.status == 200) {
          return response.json();
      } else {
        throw new Error('Failed to fetch user');
      }
    }).then( (json) => {
      dispatch(receiveUser(json));
      dispatch(getBookmarks());
    }).catch( (ex) => {
      console.log('Error occured while fetching user', ex);
      // currently just signup as anonymous and proceed
      dispatch(createAnonymousUser());
      // TODO
      //dispatch(showSignin());
    });
  });
};
