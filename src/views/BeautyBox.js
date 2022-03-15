import React from "react";
import Header from "../components/Header/Header";
import SectionSlider from "../components/SectionSlider/SectionSlider";
import ItemsToBuy from "../components/ItemToBuy/ItemsToBuy";

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
        <SectionSlider/>
        <ItemsToBuy/>
      </div>
  );

  }

}

export default BeautyBox;
