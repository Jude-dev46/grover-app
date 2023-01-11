import { Component } from "react";

import classes from "./Footer.module.css";
import logo from "../../img/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes["footer-container"]}>
          <div className={classes.content}>
            <div className={classes.content1}>
              <img src={logo} alt="grover app logo" />
              <p>
                Fast delivery, which is active all over the world, serves with
                many transportation vehicles.
              </p>
            </div>
            <ul>
              <li className={classes.title}>Company</li>
              <li>About us</li>
              <li>Blog</li>
              <li>All Products</li>
              <li>Location Map</li>
            </ul>
            <ul>
              <li className={classes.title}>Service</li>
              <li>Order tracking</li>
              <li>Wish List</li>
              <li>My account</li>
              <li>Terms & Conditions</li>
            </ul>
            <div className={classes.content2}>
              <h3>Get In Touch</h3>
              <p>
                Subcribe to our weekly Newsletter and receive updates via email
              </p>
            </div>
          </div>
          <div className={classes.copyright}>
            <p>All Rights Reserved @ BESNIK 2021</p>
            <div>
              <p>Terms and Condition</p>
              <p>Privacy and Policy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
