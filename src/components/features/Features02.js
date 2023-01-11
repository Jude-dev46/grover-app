import React from "react";

import classes from "./Features02.module.css";
import chef from "../../img/features2-img.png";
import bike from "../../img/bike-icon.png";
import ellipse from "../../img/Ellipse-2701.png";

const Features02 = () => {
  return (
    <div className={classes.features}>
      <div className={classes["features-container"]}>
        <div className={classes.content}>
          <p className={classes.title}>Home Delivery</p>
          <h2>Sit At Home We Will Take Care Your Order</h2>
          <p className={classes.info}>
            At vera eos et accusamus et lusta odio dignissimos ducimus
            blanditilis praesen voluptatum delenitis
          </p>
          <button className={classes.button}>Explore Now</button>
        </div>
        <div className={classes.img}>
          <img
            src={chef}
            alt="a smiling chef"
            className={classes["card-img"]}
          />
          <div className={classes.card}>
            <img src={bike} alt="delivery man riding his bike" />
            <h3>Bike Delivery</h3>
            <p>Bicycle service ensure your package arrive quickly</p>
          </div>
          <img
            src={ellipse}
            className={classes.ellipse}
            alt="ellipse below chef"
          />
        </div>
      </div>
    </div>
  );
};

export default Features02;
