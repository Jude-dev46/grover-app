import { Component } from "react";

import classes from "./Cta.module.css";
import phone from "../../img/mobile-mockup.png";
import appIcon from "../../img/app-store.png";
import playStoreIcon from "../../img/play-store.png";

class Cta extends Component {
  render() {
    return (
      <div className={classes.cta}>
        <div className={classes["cta-container"]}>
          <div>
            <img src={phone} alt="sign-up form on a mobile screen" />
          </div>
          <div className={classes.content}>
            <p className={classes.title}>Download our app</p>
            <h3>Get The Groceries App More Easily.</h3>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              aliquid ut voluptates inventore ut.
            </p>
            <div className={classes.buttons}>
              <div className={classes.button}>
                <img src={appIcon} alt="app store icon" />
                <p>App Store</p>
              </div>
              <div className={classes.button}>
                <img src={playStoreIcon} alt="play-store icon" />
                <p>Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cta;
