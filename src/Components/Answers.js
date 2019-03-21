import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <div>
          {this.props.answers.length == 0 ? <h4>No Answers yet</h4> : null}
        </div>
        {this.props.answers.length ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>
              <u>Question</u>
            </h6>
            <button className="btn btn-outline-danger btn-lg " style={{marginBottom:"5px"}}>Submit</button>
            <h6>
              <u>Your answer</u>
            </h6>
          </div>
        ) : null}
        <div className="list-group">
          {this.props.answers.map(item => (
            <ListItem data={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.trivia.answered
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);
