import styles from './../../../../scss/index.scss';
import React from 'react';
import Content from './content.jsx';
import Bookmarks from './../bookmarks/bookmarks.jsx';
import Images from './images.jsx';

export default function Contact (props) {
  return (
    <div className={styles.apparea}>
      <Content>
        <div className={`${styles['contact']} ${styles['others']}`}>
          Development Team:
          <ul>
            <li> Faiza Ather Mubeen - <a href="">LinkedIn Profile</a></li>
            <li>Abdul Muqsith - <a href="http://www.linkedin.com/in/muqsith-irfan-97318518" target="_blank">LinkedIn Profile</a></li>
          </ul>
        </div>
      </Content>
      <Bookmarks show="false"/>
      <Images show="false"/>
    </div>
  );
};
