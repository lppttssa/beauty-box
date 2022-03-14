import React from "react";
import "../../styles/items-to-buy/btn-buy.css"


class BtnBuy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inBasket: false,
    };
  }

  changeBtn() {
    this.setState({inBasket: !this.state.inBasket})
  }

  render() {
    return (
      <button onClick={(e) => this.changeBtn(e)}
          className={'btn-shop btn-buy btn-reset ' + (this.state.inBasket ? 'btn-buy_white' : 'btn-buy_orange')}>
        {this.state.inBasket ? 'В корзине' : 'Купить'}
      </button>
    );
  }
}

export default BtnBuy;
