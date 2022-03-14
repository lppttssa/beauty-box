import React from "react";
import Header from "../components/header";

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
        <Header/>

      </div>
  );

  }

}

export default BeautyBox;
