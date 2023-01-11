import { Component } from "react";
import classes from "./Features.module.css";
import Button from "../UI/Button";

import image from "../../img/features-image.png";
import strawberry from "../../img/service-card-img.png";
import star from "../../img/star-icon.png";
import add from "../../img/plus-icon.png";

class Features extends Component {
  render() {
    return (
      <div className={classes.features}>
        <div className={classes["features-container"]}>
          <div className={classes.img}>
            <img src={image} alt="woman covering eyes with oranges" />
            <div className={classes.card}>
              <h3>Melting Cheese</h3>
              <p>Red Stovery</p>
              <img
                src={strawberry}
                alt="strawberry"
                className={classes["card-img"]}
              />
              <div className={classes.rating}>
                <img src={star} alt="star" />
                <p>3.8</p>
              </div>
              <div className={classes.add}>
                <h3>$49.66</h3>
                <img src={add} alt="add to cart" />
              </div>
            </div>
          </div>
          <div className={classes.content}>
            <p>WHY CHOOSE US</p>
            <h2>Find Favorites And Discover New Ones</h2>
            <p className={classes.info}>
              At vera eos et accusamus et lusta odio dignissimos ducimus
              blanditilis praesen voluptatum delenitis
            </p>
            <Button>Explore Now</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
