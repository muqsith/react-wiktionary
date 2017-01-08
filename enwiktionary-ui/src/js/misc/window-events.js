import {browserHistory} from "react-router";
import { fetchWord } from './../actions/search-actions.js';
import store from './../store/store-plain.js';
import $ from 'jquery';

window.openTitle = function (event) {
  if (event) {
    event.preventDefault();
    let title = $(event.target).text();
    if (title) {
      title = title.trim();
      store.dispatch(fetchWord(title));
      browserHistory.push(CONTEXTPATH+`/word/${title}`);
    }
  }
};

window.addEventListener("popstate", (event) => {
    let pathname = event.target.location.pathname;
    if (pathname) {
      let parts = pathname.split('/');
      if (parts.length > 1) {
        let title = parts.pop();
        let word = parts.pop();
        if (word === 'word') {
          store.dispatch(fetchWord(title));
          browserHistory.push(CONTEXTPATH+`/word/${title}`);
        }
      }
    }
});

export default Function.prototype;
