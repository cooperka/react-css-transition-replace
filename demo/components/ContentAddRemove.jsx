import React from 'react';
import ReactCSSTransitionReplace from '../../src/ReactCSSTransitionReplace.jsx';


// let cnt = 0;

class ContentAddRemove extends React.Component {

  state = {added: false};

  handleClick = () => {
    this.setState({added: !this.state.added});
  }

  render() {
    const {style = {}} = this.props;

    style.cursor = 'pointer';

    return (
      <div style={style} onClick={this.handleClick}>
        <a>Click to {this.state.added ? 'remove' : 'add'} content</a><br/>
        <br/>
        <ReactCSSTransitionReplace {...this.props} onClick={this.handleClick}>
          {/*<div key={++cnt}>*/}
            {this.state.added ? this.props.children : null}
          {/*</div>*/}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

export default ContentAddRemove;
