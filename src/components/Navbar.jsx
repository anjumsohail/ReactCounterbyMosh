import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <span > Total Count : {this.props.totalCounters} </span> 
      </>
    );
  }
}

export default Navbar;
