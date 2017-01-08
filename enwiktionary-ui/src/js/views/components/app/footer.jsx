import styles from './../../../../scss/index.scss';
import React from 'react';

export default function Footer (props) {
  return (
    <footer className={styles.footer}>
      <p>
        <a className={styles['creative-commons-anchor']}
          href="https://creativecommons.org/"
          target="_blank">
          <span className={`${"fa fa-creative-commons"} ${styles['creative-commons-icon']}`}></span>
        </a>
        This text is extracted from the
        <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page" target="_blank">Wiktionary</a> available at
        this <a href="https://dumps.wikimedia.org/enwiktionary" target="_blank">link</a>.
      </p>
    </footer>
  );
};
