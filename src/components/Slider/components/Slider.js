import React, { Component } from "react";

class Slider extends Component {
  state = {
    images: [
      "https://labs.sogeti.com/wp-content/uploads/2017/06/Arndbrugman_Crypto.jpg",
      "https://www.goldeneaglecoin.com/resource/productimages/crypto-1oz-ethereum-obv.png",
      "https://i0.wp.com/xrpripplenews.com/wp-content/uploads/2019/08/xrpp-1.png?fit=461%2C490&ssl=1",
      "https://www.goldeneaglecoin.com/resource/productimages/1oz-crypto-dash-silver-obv.png",
      "https://www.goldeneaglecoin.com/resource/productimages/crypto-1oz-neo-obv.png"
    ],
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
          </div>
          <div>
            <button
              disabled={images.length - 1 === imageIndex}
              onClick={() => this.nextSlide(imageIndex, "next")}
            >
              Next
            </button>
          </div>
        </div>
        <div className="sliderDots">
          <button className="slider-dot">
            <a href="#"></a>
          </button>
          <button className="slider-dot">
            <a href="#"></a>
          </button>
          <button className="slider-dot">
            <a href="#"></a>
          </button>
        </div>
      </>
    );
  }
}

export default Slider;
