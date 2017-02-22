import React from 'react';

export default class List extends React.Component {
  render() {
    let personDetails = [{ name: 'ram', age: 23 }, { name: 'sam', age: 53 }, { name: 'ham', age: 63 }]
    let rowOfNameDom = personDetails.map(function (item) {
      return (<tr key={item.name}><td>{item.name} </td><td>{item.age} </td></tr>)
    })

    let tableOfDetails =
      <table style={{ margin: 'auto', padding: '5px' }}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {rowOfNameDom}
        </tbody>
      </table>

    return (
      <div style={{ textAlign: 'center' }}>
        <h4>List of Names</h4>
        <div>
          {tableOfDetails}
        </div>
      </div>
    );
  }
}