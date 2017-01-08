import styles from './../../../../scss/index.scss';
import React from 'react';

export default function Content (props) {
  return (
    <div className={styles.mainarticle}>
      { props.children }
    </div>
  );
};
