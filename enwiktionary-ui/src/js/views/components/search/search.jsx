import styles from './../../../../scss/index.scss';
import React from 'react';
import SearchFieldContainer from './../../containers/search/search-field-container.jsx';

export default function Search (props) {
    return (
      <div className={styles['search-panel']}>
        <SearchFieldContainer paramtitle={props.paramtitle}/>
      </div>
    );
};
