import React from 'react';
import List from './List.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.clickMe = this.clickMe.bind(this);
  }
  clickMe(msg){
    console.log('clicked', msg)
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello world</h1>
        <div>My first react application is this now hsdgfbjhsdb</div>

        <List />

        <h1 onClick={() => this.clickMe('hi')}>Click Me</h1>
      </div>
    );
  }
}