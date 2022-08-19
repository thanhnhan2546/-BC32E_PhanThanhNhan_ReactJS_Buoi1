import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
import "./Styles.css";
export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    );
  }
}
