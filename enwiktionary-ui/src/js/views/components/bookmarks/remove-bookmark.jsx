import styles from './../../../../scss/index.scss';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import { removeBookmark } from './../../../actions/bookmark-actions.js';

class RemoveBookmarkLinkView extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <a className={`${styles['bookmarks-trashcan-anchor']}`}
            onClick={(event) => {
            event.preventDefault();
            this.props.onclick(this.props.title)
          }
        }>
          <span className={`${"fa fa-trash-o"} ${styles['bookmarks-trashcan']}`}></span>
        </a>
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
      dispatch(removeBookmark(title));
    }
  }
};

const RemoveBookmarkLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBookmarkLinkView);

RemoveBookmarkLink.propTypes = {
  title: PropTypes.string,
  onclick: PropTypes.func
};

export default RemoveBookmarkLink;
