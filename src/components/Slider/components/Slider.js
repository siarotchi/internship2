import React, { Component } from "react";
import btc from "../../../assets/img/btc.png";
import dash from "../../../assets/img/dash.png";
import eth from "../../../assets/img/eth.png";
import ltc from "../../../assets/img/ltc.png";
import xrp from "../../../assets/img/xrp.png";
import monero from "../../../assets/img/monero.png";
import zcash from "../../../assets/img/zcash.png";

class Slider extends Component {
  state = {
    images: [btc, dash, eth, ltc, xrp, monero, zcash],
    imageIndex: 0,
    canGoPrev: false,
    canGoNext: true
  };

  nextSlide = (imageIndex, direction) => {
    this.setState({
      imageIndex:
        direction === "next"
          ? this.makeNextStep(imageIndex)
          : this.makePrevStep(imageIndex)
    });
  };

  makePrevStep = imageIndex => {
    const newIndex = imageIndex - 1;

    return newIndex >= 0 ? newIndex : imageIndex;
  };

  makeNextStep = imageIndex => {
    const { images } = this.state;
    const newIndex = imageIndex + 1;

    return newIndex <= images.length ? newIndex : imageIndex;
  };

  dotsCounter = () => {
    const { images } = this.state;

    return (
      <div>
        {images.map((images, imageIndex) => (
          <button
            onClick={() => this.currentSlideDot(imageIndex)}
            className="slider-dot"
          >
            {imageIndex >= 0 ? imageIndex : imageIndex + 1}
          </button>
        ))}
      </div>
    );
  };

  currentSlideDot = imageIndex => {
    const { images } = this.state;

    this.setState(
      imageIndex > 0
        ? { imageIndex: (imageIndex = 0 ? imageIndex + 2 : imageIndex - 1) }
        : {
            imageIndex:
              imageIndex >= images.lenght ? imageIndex : imageIndex - 1
          }
    );
  };

  render() {
    const { imageIndex, images } = this.state;

    return (
      <>
        <div className="slider">
          <div>
            <button
              disabled={0 === imageIndex}
              onClick={() => this.nextSlide(imageIndex, "prev")}
            >
              Previos
            </button>
          </div>
          <div>
            <img src={images[imageIndex]} alt=""></img>
            <img
              src={images[imageIndex >= images.length - 1 ? 0 : imageIndex + 1]}
              alt=""
            ></img>
            <img
              src={images[imageIndex >= images.length - 1 ? 2 : imageIndex + 2]}
              alt=""
            ></img>
          </div>
          <div>
            <button
              disabled={images.length - 1 === imageIndex + 2}
              /* for 1 image dasable
               disabled={images.length - 1 === imageIndex} e */
              onClick={() => this.nextSlide(imageIndex, "next")}
            >
              Next
            </button>
          </div>
        </div>

        <div className="sliderDots">{this.dotsCounter()}</div>
      </>
    );
  }
}

export default Slider;
