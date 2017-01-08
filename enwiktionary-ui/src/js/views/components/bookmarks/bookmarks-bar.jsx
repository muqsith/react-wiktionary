import styles from './../../../../scss/index.scss';
import font_awesome from 'font-awesome/css/font-awesome.css';
import React from 'react';

export default function BookmarksBar (props) {
  let caret_class = 'fa fa-caret-right';
  let title = "Show Bookmarks";

  if (props.view) {
    title = "Hide Bookmarks";
    caret_class = 'fa fa-caret-left';
  }
  return (
    <div className={styles['bookmarks-bar']}>
      <span className={styles['bookmarks-bar-handle']} onClick={props.onClick}
        title={title} >
        <span className={`${caret_class} ${styles['bookmarks-bar-caret']}`}></span>
        <span className={styles['bookmarks-bar-text']}>B</span>
        <span className={styles['bookmarks-bar-text']}>o</span>
        <span className={styles['bookmarks-bar-text']}>o</span>
        <span className={styles['bookmarks-bar-text']}>k</span>
        <span className={styles['bookmarks-bar-text']}>m</span>
        <span className={styles['bookmarks-bar-text']}>a</span>
        <span className={styles['bookmarks-bar-text']}>r</span>
        <span className={styles['bookmarks-bar-text']}>k</span>
        <span className={styles['bookmarks-bar-text']}>s</span>
      </span>
    </div>
  );
};
