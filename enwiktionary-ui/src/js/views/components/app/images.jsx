import styles from './../../../../scss/index.scss';
import React from 'react';

export default function Images (props) {
  let images_class = (props.show === "false") ? 'hidden' : 'images-area';
  return (
    <div className={`${styles.aside} ${styles['aside-2']}`}>
        {/* Images placeholder */}
        <div className={styles[images_class]}></div>
    </div>
  );
};
