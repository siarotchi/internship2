import React, { Component } from "react";
import images from "../../assets/img/sliderImages";
import "./LineSlider.scss";

class LineSlider extends Component {
  state = {
    images,
    margin: 0
  };
  moveLeft = () => {
    this.setState(prevState => ({
      margin: prevState.margin + /*180*/ 250
    }));
  };
  moveRight = () => {
    this.setState(prevState => ({
      margin: prevState.margin - /*180*/ 250
    }));
  };

  render() {
    const { images, margin } = this.state;

    const style = {
      left: margin
    };

    return (
      <div className="line-container">
        <div className="line-carousel">
          <div className="line-slider" style={style}>
            {images.map((img, index) => (
              <section key={index}>
                <img src={img} alt=""></img>
              </section>
            ))}
          </div>
          <div className="line-slider-controls">
            <button onClick={this.moveLeft} className="arrow line-slider-left">
              L
            </button>
            <button onClick={this.moveRight} className="arrow line-slider-right">
              R
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LineSlider;
