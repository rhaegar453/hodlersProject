import React, { Component } from "react";
import { connect } from "react-redux";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRight: false
    };
  }

  render() {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {this.props.data.question}
        <span class="badge badge-danger badge-pill">
          {this.props.data.myAnswer}
        </span>
        {this.props.submitted ? (
          <div>
        <span class="badge badge-success badge-pill">
          {this.props.data.correct_answer}
        </span>
          </div>
        ) : null}
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    submitted: state.trivia.submitted
  };
};

export default connect(mapStateToProps)(ListItem);
