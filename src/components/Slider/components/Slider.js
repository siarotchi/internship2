import React from "react";

class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [
        "https://labs.sogeti.com/wp-content/uploads/2017/06/Arndbrugman_Crypto.jpg",
        "https://i0.wp.com/xrpripplenews.com/wp-content/uploads/2019/08/xrpp-1.png?fit=461%2C490&ssl=1",
        "https://lh3.googleusercontent.com/proxy/vY6YgVkgo6o78qfWcukyZbsZWouCtTbzO4K30bOSxsFjnTmJVXiD5xKIs3h0WnuVMw_86ObiIQgBx3YAQPA1M3lp6SZw8zwzvU7sVGRAScNUrD28pg",
        "https://www.goldeneaglecoin.com/resource/productimages/1oz-crypto-dash-silver-obv.png",
        "https://www.goldeneaglecoin.com/resource/productimages/crypto-1oz-neo-obv.png"
      ],
      imageIndex: 0,
      canGoPrev: false,
      canGoNext: true
    };

    this.nextSlide = this.nextSlide.bind(this);
  }

  nextSlide(event) {
    let newIndex = this.state.imageIndex;
    if (event.currentTarget.dataset.direction === "next") {
      newIndex = this.makeNextStep(newIndex);
    } else {
      newIndex = this.makePrevStep(newIndex);
    }
    this.setState({ imageIndex: newIndex });
  }

  makePrevStep(newIndex) {
    if (newIndex > 0) {
      newIndex = this.state.imageIndex - 1;
      this.setState({ canGoNext: true });
    }
    if (newIndex === 0) {
      this.setState({ canGoPrev: false });
    }
    return newIndex;
  }

  makeNextStep(newIndex) {
    if (newIndex < this.state.images.length - 1) {
      newIndex = this.state.imageIndex + 1;
      this.setState({ canGoPrev: true });
    }
    if (newIndex === this.state.images.length - 1) {
      this.setState({ canGoNext: false });
    }
    return newIndex;
  }

  render() {
    return (
      <div className="slider">
        <div>
          <button
            disabled={!this.state.canGoPrev}
            onClick={this.nextSlide.bind(this)}
            data-direction="prev"
          >
            Previos
          </button>
        </div>
        <div>
          <img src={this.state.images[this.state.imageIndex]} alt=""></img>
          {this.state.imageIndex}
        </div>
        <div>
          <button
            disabled={!this.state.canGoNext}
            onClick={this.nextSlide.bind(this)}
            data-direction="next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
