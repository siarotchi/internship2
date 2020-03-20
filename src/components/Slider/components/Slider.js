import React, { Component } from "react";
import images from "../../../assets/img/sliderImages";
import "../../../index.scss";

class Slider extends Component {
  state = {
    images,
    imageIndex: 0,
    canGoPrev: false,
    canGoNext: true
  };

  nextSlide = (imageIndex, direction) => {
    this.setState({
      imageIndex: direction === "next" ? this.makeNextStep(imageIndex) : this.makePrevStep(imageIndex)
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
            key={imageIndex}
            onClick={() => this.currentSlideDot(imageIndex)}
            className="slider-dot"
            // activeClassName={s.active}
            // activeId={null}
          >
            {/* to view index*/}
            {/* {imageIndex >= 0 ? imageIndex : imageIndex + 1} */}
          </button>
        ))}
      </div>
    );
  };

  currentSlideDot = imageIndex => {
    const { images } = this.state;

    this.setState(
      imageIndex > 0
        ? { imageIndex: imageIndex - 1 }
        : {
            imageIndex: imageIndex >= images.length ? imageIndex : imageIndex - 1
          }
    );
  };

  // isActiveDot(imageIndex) {
  //   this.currentSlideDot().imageIndex === imageIndex ? className += 'isActive' : '';
  // }

  render() {
    const { imageIndex, images } = this.state;

    return (
      <>
        <hr />
        <div className="slider">
          <div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              disabled={imageIndex === 0}
              onClick={() => this.nextSlide(imageIndex, "prev")}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
          </div>
          <div>
            <img src={images[imageIndex]} alt=""></img>
            <img src={images[imageIndex >= images.length - 1 ? 0 : imageIndex + 1]} alt=""></img>
            <img src={images[imageIndex >= images.length - 2 ? 0 : imageIndex + 2]} alt=""></img>
          </div>
          <div>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              disabled={imageIndex === images.length - 1}
              //for 1 image {imageIndex === images.length - 3}
              onClick={() => this.nextSlide(imageIndex, "next")}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="sliderDots">{this.dotsCounter()}</div>
        <hr />
      </>
    );
  }
}

export default Slider;
