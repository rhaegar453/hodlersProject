import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { submitTrivia, generateReport } from "../Store/Actions";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }
  generateReport = () => {
    this.props.generateReport();
  };

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
            {!this.props.submitted ? (
              <button
                className="btn btn-outline-danger"
                style={{ marginBottom: "5px", borderRadius: "30px" }}
                onClick={this.props.submitTrivia}
              >
                Submit
              </button>
            ) : null}
            <h6>
              <u>Your answer</u>
            </h6>
            {this.props.submitted ? <h6>Actual Answer</h6> : null}
          </div>
        ) : null}
        <div className="list-group">
          {this.props.answers.map(item => (
            <ListItem data={item} submitted={this.props.submitted} />
          ))}
        </div>

        {this.props.submitted ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px"
            }}
          >
            <button
              className="btn btn-outline-danger justify-content-center"
              style={{ borderRadius: "30px" }}
              onClick={this.generateReport}
            >
              Generate Report
            </button>
          </div>
        ) : null}
        <div style={{display:'flex', justifyContent:'center', marginTop:"10px"}}>
        {this.props.generated ? (
          <div>
            <p>Attempted Questions:{this.props.attempted}</p>
            <p>Right Answers:{this.props.correct}</p>
            <p>Wrong Answers:{this.props.wrong}</p>
            <h4>Score:{this.props.correct * 250 - this.props.wrong * 50}</h4>
          </div>
        ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.trivia.answered,
    submitted: state.trivia.submitted,
    generated: state.trivia.generated,
    correct: state.trivia.correct,
    wrong: state.trivia.wrong,
    attempted: state.trivia.attempted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitTrivia: () => dispatch(submitTrivia()),
    generateReport: () => dispatch(generateReport())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);
