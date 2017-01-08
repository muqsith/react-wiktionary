import styles from './../../../../scss/index.scss';
import React from 'react';
import BookmarksContent from './bookmarks-content.jsx';
import BookmarksBar from './bookmarks-bar.jsx';

export default class Bookmarks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'bookmarks-class' :
          (this.props.show === "false") ? 'hidden' : 'bookmarks',
      show_content: undefined
    };
    this.toggleBookmarksContent = this.toggleBookmarksContent.bind(this);
  };

  toggleBookmarksContent () {
    if (this.state.show_content) {
      this.setState((prevState) => {
        return {show_content: false};
      });
    } else {
      this.setState((prevState) => {
        return {show_content: true};
      });
    }
  };

  render () {
    return (
      <div className={styles.aside, styles['aside-1']}>
          {/* place for bookmarks */}
          <div className={styles[this.state['bookmarks-class']]}>
            <BookmarksContent view={this.state.show_content} />
            <BookmarksBar onClick={ this.toggleBookmarksContent }
                view={this.state.show_content}
              />
          </div>
      </div>
    );
  };

};
