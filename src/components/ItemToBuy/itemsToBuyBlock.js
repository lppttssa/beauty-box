import React from "react";
import BtnBuy from "./btnBuy";
import "../../styles/items-to-buy/items-to-buy.css"

class ItemsToBuyBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  colText = (<div className={this.props.isFirstColText ? 'items-to-buy-block__item-info' : ''}>
    <h2 className="title-h2 title-h2_mrgnbtm title-h2_lighter">{this.props.title}</h2>
    <p className="description-text description-text_mrgnbtm">{this.props.description}</p>
    <h4 className="price price_mrgnbtm">{this.props.price}</h4>
    <BtnBuy />
  </div>)

  colImg =  <img className={!this.props.isFirstColText ? 'items-to-buy-block__item-info' : ''}
                 src={this.props.img} alt={this.props.title}/>

  render() {
    return (
      <li className={(this.props.isFirstColText ? 'items-to-buy-block_grey' : '') + ' items-to-buy-block list-reset'}>
        <div className="items-to-buy-block__item-wrap container">
          {this.props.isFirstColText? this.colText : this.colImg}
          {this.props.isFirstColText ? this.colImg : this.colText}
        </div>
      </li>
    );
  }
}

export default ItemsToBuyBlock;
