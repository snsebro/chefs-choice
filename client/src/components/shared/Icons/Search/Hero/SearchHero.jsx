import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Search from '../Hero/SearchHero.png';
import "../Hero/SearchHero.scss";

export default class Button extends Component {
  render() {
    return (
    <>
        <Link to="/search">
        <img src={Search} />
        </Link>
    </>
    );
  }
}
