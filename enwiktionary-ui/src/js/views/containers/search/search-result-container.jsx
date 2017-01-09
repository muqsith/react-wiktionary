import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './../../../../scss/index.scss';
import $ from 'jquery';

import DefinitionView from './../../components/search/result-view.jsx';

class SearchResultContainerView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.definition);
  }

  render() {
    return (
      <div className={styles['result-view-container']}>
        <DefinitionView definition={this.props.definition}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state.word;
};


const SearchResultContainer = connect(
  mapStateToProps
)(SearchResultContainerView);

SearchResultContainer.propTypes = {
  definition: PropTypes.string
};

export default SearchResultContainer;
