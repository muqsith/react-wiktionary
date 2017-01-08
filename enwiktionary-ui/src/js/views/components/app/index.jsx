import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import App from './app.jsx';
import Dictionary from './dictionary.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';

import store from './../../../store/store-plain.js';
import { Provider } from 'react-redux';

import noop from './../../../misc/window-events.js';

render(
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={CONTEXTPATH+"/"} component={App}>
            <IndexRoute component={Dictionary} />
            <Route path={CONTEXTPATH+"/word/:title"} component={Dictionary} />
            <Route path={CONTEXTPATH+"/about"} component={About} />
            <Route path={CONTEXTPATH+"/contact"} component={Contact} />
          </Route>
        </Router>
      </Provider>
    </AppContainer>,
  document.querySelector("#container")
);
