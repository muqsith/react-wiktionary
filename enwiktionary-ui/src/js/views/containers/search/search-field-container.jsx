import React, { Component, PropTypes } from 'react';
import SearchField from './../../components/search/search-field.jsx';
import styles from './../../../../scss/index.scss';
import {browserHistory} from "react-router";

import { connect } from 'react-redux';
import { search, fetchWord, reset } from './../../../actions/search-actions.js';
import {addBookmark} from './../../../actions/bookmark-actions.js';
import { SUCCESS, ERROR,
      INVALID, INPROGRESS } from './../../../actions/fetch-status.js';

class SearchFieldContainerView extends Component {
  constructor (props) {
    super(props);
    this.state = { 'focus-div': true};
    this.addFocus = this.addFocus.bind(this);
    this.removeFocus = this.removeFocus.bind(this);
  }

  addFocus () {
    this.setState({'focus-div' : true});
  }
  removeFocus () {
    this.setState({'focus-div' : false});
  }

  componentDidMount() {
    if (this.props.paramtitle) {
      this.props.onkeyup(this.props.paramtitle, 13);
    }
  }

  render () {
    let div_focus_class = (this.state['focus-div']) ? 'search-field-div-focus' : '';
    let show_bookmarks_icon = (this.props && this.props.word.status === SUCCESS) ?
      'bookmark-icon-visible' : 'bookmark-icon-hidden';
    let bookmark_icon = (this.props.bookmarks.data.indexOf(this.props.word.title) === -1) ?
      'bookmark-icon-grey':'bookmark-icon-golden';
    return (
        <div className={`${styles['search-field-div']} ${styles[div_focus_class]}`} >
          <span className={`${"fa fa-search"} ${styles['search-icon']}`}></span>
          <SearchField addFocus={this.addFocus} removeFocus={this.removeFocus}
            onKeyUp={this.props.onkeyup}
            paramtitle={this.props.paramtitle}
            />
          <span onClick={ () => { this.props.onclick(this.props.word.title) } }
            className={`${"fa fa-star"} ${styles[bookmark_icon]} `
            + `${styles[show_bookmarks_icon]}`} title="Bookmark"></span>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onkeyup: (searchText, currentKeyCode) => {
      if (currentKeyCode === 13) {
        dispatch(fetchWord(searchText));
        browserHistory.push(CONTEXTPATH+`/word/${searchText}`);
      } else if ([27, 8].indexOf(currentKeyCode) !== -1
        || (currentKeyCode >= 48 && currentKeyCode <= 90)){
        dispatch(reset());
      }
    },
    onclick: (title) => {
      dispatch(addBookmark(title));
    }
  }
};

const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFieldContainerView);

export default SearchFieldContainer;
