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
            <svg className="slider-item__like" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7574 15.7227L10.7563 15.7237L10.1282 16.3054C10.0326 16.3939 9.88508 16.3942 9.78916 16.306L9.16502 15.7324C9.16471 15.7321 9.16441 15.7319 9.1641 15.7316C6.83197 13.5757 4.95653 11.8417 3.65493 10.2218C2.36216 8.61287 1.71091 7.2061 1.71091 5.71793C1.71091 3.30016 3.56517 1.43251 5.91091 1.43251C6.99826 1.43251 8.1665 2.20198 9.09574 3.20064C9.56205 3.70178 10.3598 3.70178 10.8261 3.20064C11.7553 2.20198 12.9236 1.43251 14.0109 1.43251C16.3566 1.43251 18.2109 3.30016 18.2109 5.71793C18.2109 7.20609 17.5597 8.61283 16.267 10.2204C14.9654 11.8392 13.0898 13.5712 10.7574 15.7227Z" fill="white" stroke="#BCC1C6" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
