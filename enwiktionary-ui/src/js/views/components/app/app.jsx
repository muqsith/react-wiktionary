import styles from './../../../../scss/index.scss';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Dictionary from './dictionary.jsx';
import { getUser } from './../../../actions/user-actions.js';

import { connect } from 'react-redux';

import { SUCCESS, ERROR,
      INVALID, INPROGRESS } from './../../../actions/fetch-status.js';

class AppView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadUserDetails();
  }

  render() {

    if (this.props.status === SUCCESS) {
      let div = document.querySelector('.'+styles.main);
      div.scrollTop = 0;
    }

    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
            {this.props.children || <Dictionary />}
            <Footer />
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return state.word;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserDetails : () => {
        dispatch(getUser());
    }
  }
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default App;
