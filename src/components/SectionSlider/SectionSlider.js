import React from "react";
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
        </div>
    );

  }

}

export default SectionSlider;
