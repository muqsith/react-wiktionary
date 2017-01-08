import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './../../../../scss/index.scss';
import $ from 'jquery';

class DefinitionViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  getProcessedDefinition (definition) {
    let processedDefinition = definition;
    if (definition) {
      let result_div = $(definition);
      let anchors = $('a', result_div);
      if (anchors && anchors.length
          && anchors.length > 0) {
        for (let i=0; i<anchors.length; i+=1) {
          let anchor = anchors[i];
          if (anchor) {
            if ($(anchor).attr('href')) {
              $(anchor).attr('target', '_blank');
            } else {
              let anchorText = $(anchor).text();
              if (anchorText) {
                $(anchor).attr('href', CONTEXTPATH+`/word/${anchorText.trim()}`);
                $(anchor).attr('onclick', "openTitle(event)");
              }
            }
          }
        }
      }
      let _processedDefinition = '';
      let _result = $(result_div);
      for (let i=0; i<_result.length; i+=1) {
        _processedDefinition += $(_result[i]).html();
      }
      processedDefinition = _processedDefinition;
    }
    return processedDefinition;
  }

  render() {
    let def = this.getProcessedDefinition(this.props.definition);
    return (
      <div className={styles['definition-view']}
        dangerouslySetInnerHTML={{__html: def}} />
    )
  }
};

const mapStateToProps = (state) => {
  return state.word;
};


const DefinitionView = connect(
  mapStateToProps
)(DefinitionViewComponent);

export default DefinitionView;
