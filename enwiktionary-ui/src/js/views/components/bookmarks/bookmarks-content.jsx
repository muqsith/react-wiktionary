import styles from './../../../../scss/index.scss';
import React , { PropTypes } from 'react';
import { Link } from 'react-router';
import WordLink from './bookmark-link.jsx';
import RemoveBookmarkLink from './remove-bookmark.jsx';

import { connect } from 'react-redux';

function BookmarksContentContainer (props) {

  let bookmarks_container_class = 'bookmarks-container-init';
  let bookmarks_content_class = 'bookmarks-content-init';
  if (props.view !== undefined) {
    if (props.view) {
      bookmarks_container_class = 'bookmarks-container-show';
      bookmarks_content_class = 'bookmarks-content-show'
    } else {
      bookmarks_container_class = 'bookmarks-container-hide';
      bookmarks_content_class = 'bookmarks-content-hide'
    }
  }

  return (
    <div className={`${styles[bookmarks_container_class]} ${styles['bookmarks-container']}`}>
      {/* bookmarks content */}
      <div className={`${styles['bookmarks-content']}`}>
        <div className={`${styles[bookmarks_content_class]} ${styles['bookmarks-content-list']}`}>
          <div className={styles['bookmarks-heading-container']}>
            <span className={`${"fa fa-star"} ${styles['bookmarks-icon']}`}></span>
            <span className={styles['bookmarks-heading-text']}>Bookmarks</span>
          </div>
          <div className={styles['bookmarks-list']}>
            <ul>
              {
                props.bookmarks.data.map( (title) => {
                  return (
                    <li key={title}>
                      <WordLink title={title} />
                      <RemoveBookmarkLink title={title} />
                    </li>
                  )
                })
              }


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {bookmarks:state.bookmarks};
}

const BookmarksContent = connect(
  mapStateToProps
)(BookmarksContentContainer);

BookmarksContent.propTypes = {
  view: PropTypes.bool,
  bookmarks: PropTypes.object
};

export default BookmarksContent;
