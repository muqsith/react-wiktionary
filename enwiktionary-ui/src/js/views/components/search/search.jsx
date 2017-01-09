import styles from './../../../../scss/index.scss';
import React, { PropTypes } from 'react';
import SearchFieldContainer from './../../containers/search/search-field-container.jsx';

function Search (props) {
    return (
      <div className={styles['search-panel']}>
        <SearchFieldContainer paramtitle={props.paramtitle}/>
      </div>
    );
};

Search.propTypes = {
  paramtitle: PropTypes.string
};

export default Search;
