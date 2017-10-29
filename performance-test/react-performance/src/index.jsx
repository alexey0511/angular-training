/* global document */
import React from 'react';
import ReactDOM from 'react-dom';



class Root extends React.Component {
  componentWillMount() {
    this.setState({ timeStart: new Date()})

    let data = []
    for (let i=0; i< 10 * 1000; i++) {
      data.push('test')
    }
    this.setState({ data })
  }
  componentDidMount() {
    let timeDiff = new Date().getTime() - this.state.timeStart.getTime()
    console.log('Time diff: ' + timeDiff / 1000)  }


  render() {
    return (
      <table>
        {this.state.data.map((row, id) => <tr key={id}><td>{row}</td></tr>)}
      </table>

    );
  }
}


ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
