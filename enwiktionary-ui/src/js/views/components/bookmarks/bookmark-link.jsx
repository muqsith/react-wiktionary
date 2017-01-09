import styles from './../../../../scss/index.scss';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {browserHistory} from "react-router";
import { connect } from 'react-redux';

import { addBookmark } from './../../../actions/bookmark-actions.js';
import {search, fetchWord, reset} from './../../../actions/search-actions.js';

class WordLinkView extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Link to={CONTEXTPATH+`/word/${this.props.title}`} onClick={() => {
            this.props.onclick(this.props.title)
          }
        }>{this.props.title}</Link>
      );
    }
};

// State is not used, this is just to avoid error
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onclick: (title) => {
      dispatch(fetchWord(title));
      browserHistory.push(CONTEXTPATH+`/word/${title}`);
    }
  }
};

const WordLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordLinkView);

WordLink.propTypes = {
  title: PropTypes.string,
  onclick: PropTypes.func
};

export default WordLink;
