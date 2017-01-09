import styles from './../../../../scss/index.scss';
import React, { PropTypes } from 'react';
import font_awesome from 'font-awesome/css/font-awesome.css';

import { connect } from 'react-redux';

class SearchFieldView extends React.Component {
  constructor (props) {
    super(props);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { fieldValue : this.props.paramtitle }
  }

  handleOnKeyUp (event) {
    if (event && event.target && event.target.value) {
      this.props.onKeyUp(event.target.value, event.keyCode);
    }
  }

  handleChange (event) {
    let _fieldValue = event.target.value;
    this.setState({fieldValue: _fieldValue});
  }

  componentWillReceiveProps (nextProps) {
      if (nextProps.title) {
        this.setState({fieldValue: nextProps.title});
      }
  }

  render () {
    return (
      <input type="text" className={styles['search-field']}
        placeholder="Search ..."
        autoFocus="true"
        onFocus={ this.props.addFocus }
        onBlur={ this.props.removeFocus }
        onKeyUp={ this.handleOnKeyUp }
        value={ this.state.fieldValue }
        onChange={ this.handleChange }
         />
    );
  }
}

const mapStateToProps = (state) => {
  return state.word;
}

const SearchField = connect(
  mapStateToProps
)(SearchFieldView);

SearchField.propTypes = {
  paramtitle: PropTypes.string,
  onKeyUp: PropTypes.func,
  addFocus: PropTypes.func,
  removeFocus: PropTypes.func
};

export default SearchField;
