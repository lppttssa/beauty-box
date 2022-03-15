import React from "react";

import '../../styles/section-slider/btn-to-basket.css'

class BtnToBasket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="btn-to-basket">
        <button className={'btn-to-basket__btn btn-reset '}>
          В корзину
        </button>
      </div>
    );
  }
}

export default BtnToBasket;
