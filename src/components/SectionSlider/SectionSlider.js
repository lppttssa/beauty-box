import React from "react";
import Slider from "./Slider";
import '../../styles/section-slider/section-slider.css'

class SectionSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="section-slider container-slider">
          <h2 className=" title-h2 section-slider__title">Выбери свой Beauty Box</h2>
          <Slider/>
        </div>
    );
  }
}

export default SectionSlider;
