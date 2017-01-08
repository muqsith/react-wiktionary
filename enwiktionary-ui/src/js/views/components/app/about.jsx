import styles from './../../../../scss/index.scss';
import React from 'react';
import Content from './content.jsx';
import Bookmarks from './../bookmarks/bookmarks.jsx';
import Images from './images.jsx';

export default function About (props) {
  return (
    <div className={styles.apparea}>
      <Content>
        <div className={`${styles['about']} ${styles['others']}`}>
          <p>
            This project was created to gain understanding of JavaScript technologies trending in the year 2016.
            We have used below JavaScript technologies along with the latest version of JavaScript (<a target="_blank" href="http://es6-features.org/ ">ES6</a>).
          </p>
          <ul>
            <li>
              <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
            </li>
            <li>
              <a href="https://babeljs.io/" target="_blank">Babel</a>
            </li>
            <li>
              <a href="https://webpack.github.io/" target="_blank">Webpack-1.0</a>
            </li>
            <li>
              <a href="https://facebook.github.io/react/" target="_blank">React</a>
            </li>
            <li>
              <a href="http://redux.js.org/" target="_blank">Redux</a>
            </li>
            <li>
              <a href="https://github.com/ReactTraining/react-router" target="_blank">React-Router</a>
            </li>
          </ul>
        </div>
      </Content>
      <Bookmarks show="false"/>
      <Images show="false"/>
    </div>
  );
};
