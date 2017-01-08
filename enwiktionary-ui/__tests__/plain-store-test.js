import { search, addBookmark, removeBookmark,
  fetchWord } from './../src/js/actions/actions.js';

import store from './../src/js/store/store-plain.js';

describe('async actions', () => {

  it('test fetch word', () => {
      return store.dispatch(fetchWord('apple'))
      .then(() => {
        expect(store.getState().definition).not.toBe('');
      });
  });

});
