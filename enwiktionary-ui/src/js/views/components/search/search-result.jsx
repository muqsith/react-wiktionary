import styles from './../../../../scss/index.scss';
import React from 'react';
import SearchResultContainer from './../../containers/search/search-result-container.jsx';

export default function SearchResult (props) {
  return (
    <div className={styles['result-panel']}>
      <SearchResultContainer/>
    </div>
  );
};
