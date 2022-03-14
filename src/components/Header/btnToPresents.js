import React from "react";
import '../../styles/header/btn-to-presents.css'

class BtnToPresents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="btn-to-presents">
        <a  href="#items" className="btn-to-presents__btn btn-shop btn-reset">{this.props.text}</a>
      </div>
    );

  }

}

export default BtnToPresents;
