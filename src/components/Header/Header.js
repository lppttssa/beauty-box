import React from "react";
import BtnToPresents from "./BtnToPresents";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      me: 'hi',
    };
  }

  render() {
    return (
      <div className="beauty-box container">
        <header className="beauty-box__header">
          <div className="beauty-box__info">
            <h1 className="beauty-box__title">Beauty Box</h1>
            <h5 className="beauty-box__description">Набор косметики от Аптека25.рф</h5>
            <BtnToPresents text="Выбрать подарок"/>
          </div>
        </header>
      </div>
    );

  }

}

export default Header;
