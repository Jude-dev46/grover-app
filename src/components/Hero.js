import { Component } from "react";

import classes from "./Hero.module.css";

import Button from "./UI/Button";
import playButton from "../img/button-play.png";
import headerImg from "../img/Header-Image.png";
import img from "../img/img.png";

class Hero extends Component {
  render() {
    return (
      <div className={classes.header}>
        <div className={classes["header-container"]}>
          <div className={classes["header-text"]}>
            <div className={classes.text}>
              <div className={classes.paragraph}>
                <p>More than faster</p>
                <img src={img} alt="strawberry" />
              </div>
              <h1>
                Groceries delivered in as little as <span>2 hours</span>
              </h1>
              <p className={classes["text-description"]}>
                Grocen atssures fresh grocery every morning to your family
                without getting out in this pandemic
              </p>
            </div>
            <div className={classes.action}>
              <Button>Order Now</Button>
              <div className={classes.order}>
                <img src={playButton} alt="play button" />
                <p>Order Process</p>
              </div>
            </div>
          </div>
          <div className={classes["header-img"]}>
            <img src={headerImg} alt="man carry apple" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
