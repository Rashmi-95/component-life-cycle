import React from 'react';
import ReactDOM from 'react-dom'

let App = React.createClass({
  getDefaultProps: function () {
    console.log('getDefaultProps : default props empty')
    return {}
  },
  getInitialState: function () {
    console.log('getInitialState : default state count 0')
    return {
      count: 0
    }
  },
  increase: function () {
    this.setState({
      count: this.state.count + 1
    })
  },
  componentWillMount: function () {
    console.log('componentWillMount: component before rendering frist time')
  },
  componentDidMount: function () {
    console.log('ComponentDidMount: component after rendering first time')
  },
  componentWillReceiveProp: function () {
    console.log('ComponentWillReceiveProp: component will prop cahnges')
  },
  shouldComponentUpdate: function (newProp, newState) {
    console.log('shouldComponentUpdate: will return bool that handles rendering. Should update ?')

    if (newState.count < 2) {
      console.log('shouldComponentUpdate: should')
      return true;
    } else {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      console.log('shouldComponentUpdate: should not')
      return false;
    }
  },
  componentWillUpdate: function () {
    console.log('componentWillUpdate: component before rendering')
  },
  componentDidUpdate: function () {
    console.log('componentDidUpdate: component updated')
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount: component is to be removed')
  },
  render: function () {
    console.log('render')
    return (
      <div id="counter">
        <p> {this.state.count}</p>
        <button onClick={this.increase}> + </button>
      </div>
    )
  }
})

module.exports = App
