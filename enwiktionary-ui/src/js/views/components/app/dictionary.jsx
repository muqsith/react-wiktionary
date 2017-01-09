import styles from './../../../../scss/index.scss';
import React, { PropTypes } from 'react';
import Content from './content.jsx';
import Bookmarks from './../bookmarks/bookmarks.jsx';
import Images from './images.jsx';
import Search from './../search/search.jsx';
import SearchResult from './../search/search-result.jsx';

function Dictionary (props) {
  let title = '';
  if (props.params && props.params.title) {
    title = props.params.title;
  }
  return (
    <div className={styles.apparea}>
      <Content>
        <Search paramtitle={title}/>
        <SearchResult />
      </Content>
      <Bookmarks />
      <Images />
    </div>
  );
};

Dictionary.propTypes = {
  params: PropTypes.object
};

export default Dictionary;
