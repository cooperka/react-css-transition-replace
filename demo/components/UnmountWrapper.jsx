import React from 'react';


class UnmountWrapper extends React.Component {

  componentDidMount() {
    console.log('Mount');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    return this.props.children;
  }
}

export default UnmountWrapper;
