import React from "react";
import logo from '../logo.svg';

class BeautyBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      me: 'hi',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.me}
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );

  }

}

export default BeautyBox;
