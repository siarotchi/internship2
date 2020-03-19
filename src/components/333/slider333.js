import React, { Component } from "react";
import btc from "../../assets/img/btc.png";
import dash from "../../assets/img/dash.png";
import eth from "../../assets/img/eth.png";
import ltc from "../../assets/img/ltc.png";
import xrp from "../../assets/img/xrp.png";
import monero from "../../assets/img/monero.png";
import zcash from "../../assets/img/zcash.png";
import s from "./slider333.scss";

class Slider333 extends Component {
  state = {
    images: [btc, dash, eth, ltc, xrp, monero, zcash],
    leftStatus: false,
    rightStatus: false,
    margin: 0
  };
  moveLeft = () => {
    this.setState(prevState => ({
      rightStatus: false,
      leftStatus: true,
      margin: prevState.margin - /*180*/ 250
    }));
  };
  moveRight = () => {
    this.setState(prevState => ({
      rightStatus: true,
      leftStatus: true,
      margin: prevState.margin + /*180*/ 250
    }));
  };

  render() {
    const { images, margin, leftStatus, rightStatus } = this.state;

    let marginStyle = {};
    if (leftStatus) {
      marginStyle = { left: margin + "px" };
    } else if (rightStatus) {
      marginStyle = { right: margin + "px" };
    }

    return (
      <div className="line-container">
        <div className="line-carousel">
          <div className="line-slider" style={marginStyle}>
            {images.map(img => (
              <section>
                <img src={img} alt=""></img>
              </section>
            ))}
          </div>
          <div className="line-slider-controls">
            <button onClick={this.moveLeft} className="arrow line-slider-left">
              L
            </button>
            <button
              onClick={this.moveRight}
              className="arrow line-slider-right"
            >
              R
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider333;
