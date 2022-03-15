import React from "react";
import BtnToBasket from "./BtnToBasket";

import '../../styles/section-slider/slider-item.css'

class SliderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="slider-item">
        <img src={this.props.img} alt={this.props.title} className="slider-item__img"/>
        <div className="slider-item__text-container">
          <span className="description-text slider-item__title">{this.props.title}</span>
          <span className="price slider-item__price">{this.props.price}</span>
          <div className="slider-item__btn-container">
            <BtnToBasket/>
            <img className="slider-item__like" src="/like.svg" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
