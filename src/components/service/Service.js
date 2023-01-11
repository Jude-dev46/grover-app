import React from "react";
import { Card } from "react-bootstrap";

import classes from "./Service.module.css";

import cardImg from "../../img/card-icon-img1.png";
import cardImg1 from "../../img/card-icon-img2.png";
import cardImg2 from "../../img/card-icon-img3.png";

const Service = () => {
  return (
    <div className={classes.service}>
      <div className={classes["service-text"]}>
        <p>What we serve</p>
        <h1>Fruit And Vegetable Delivered</h1>
        <h1>To Your Home</h1>
      </div>
      <div className={classes.card}>
        <Card
          style={{ width: "18rem", height: "18rem" }}
          className={classes["card-box"]}
        >
          <Card.Img
            variant="top"
            src={cardImg1}
            style={{ width: "100px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title className={classes.title}>Free shipping</Card.Title>
            <Card.Text>
              Enjoy Order in a hand using the freshness of greatness
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "18rem" }}
          className={classes["card-box"]}
        >
          <Card.Img
            variant="top"
            src={cardImg}
            style={{ width: "100px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title className={classes.title}>15 days returns</Card.Title>
            <Card.Text>
              Order in a handy way using the freshness of the groceries
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "18rem" }}
          className={classes["card-box"]}
        >
          <Card.Img
            variant="top"
            src={cardImg2}
            style={{ width: "100px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title className={classes.title}>Secure checkout</Card.Title>
            <Card.Text>
              If you get rotten items - return immediately to us
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "19rem" }}
          className={classes["card-bg"]}
        ></Card>
      </div>
    </div>
  );
};

export default Service;
