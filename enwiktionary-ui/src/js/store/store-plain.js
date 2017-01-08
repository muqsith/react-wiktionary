import 'babel-polyfill';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import app from './../reducers/reducers.js';
import { search, fetchWord } from './../actions/search-actions.js';
import {addBookmark, removeBookmark} from './../actions/bookmark-actions.js';

const loggerMiddleware = createLogger();

/*
  store shape:
    {
      word: {
        title: '',
        definition: '',
        status: INVALID, // initially invalid, success if got
      },
      user: {
        fname:'',
        lname:'',
        email:'',
        anonymous:0,
        role:'user'
      },
      userstatus: {
        signin: INVALID, // initially invalid, success if got
        signup: INVALID, // initially invalid, success if got
      },
      bookmarks: {
        status: INVALID, // initially invalid, success if got
        data: []
      }
    }
*/

let store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
