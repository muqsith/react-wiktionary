import styles from './../../../../scss/index.scss';
import React , { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import { connect } from 'react-redux';

class HeaderView extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    let indexLinkPath = CONTEXTPATH+'/';
    if (this.props.word.title) {
      indexLinkPath = CONTEXTPATH+`/word/${this.props.word.title}`;
    }

    return (
      <header>
        <ul className={styles.navigation}>
          <li className={`${styles.appname} ${styles['navigation-list-index-element']}`}>
            <IndexLink to={indexLinkPath} activeClassName={styles.activelink}>Dictionary</IndexLink>
          </li>
          <li className={`${styles['navigation-list-about-element']}`}><Link to={CONTEXTPATH+"/about"} activeClassName={styles.activelink}>About</Link></li>
          <li className={`${styles['navigation-list-contact-element']}`}><Link to={CONTEXTPATH+"/contact"} activeClassName={styles.activelink}>Contact</Link></li>
          <li className={`${styles['navigation-list-user-element']}`}><a href=""><span className={`${"fa fa-user"}`}></span></a></li>
        </ul>
      </header>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
}

const Header = connect(
  mapStateToProps
)(HeaderView);

Header.propTypes = {
  word: PropTypes.object
};

export default Header;
