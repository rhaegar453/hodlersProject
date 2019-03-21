import React, { Component } from "react";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <a class="navbar-brand" href="#" style={{ fontSize: "20px" }}>
          <b>
          <i class="fab fa-bitcoin" style={{marginRight:"10px", fontSize:"40px"}}></i>HodlersTr<i class="fas fa-question" />via
          </b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse mt-3 ml-2" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
        <a class="nav-link" href="#"><b>Answered</b></a>
      </li>
          </ul>
        </div>
      </nav>
    );
  }
}
