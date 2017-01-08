import { combineReducers } from 'redux';

import word from './word.js';
import bookmarks from './bookmarks.js';
import user from './user.js';
import userstatus from './user-status.js';

const app = combineReducers({
  word,
  user,
  userstatus,
  bookmarks
});

export default app;
