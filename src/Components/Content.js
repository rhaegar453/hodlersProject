import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { modalOpen } from "../Store/Actions";
import Modal from "./ModelComponent";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Modal />
        <div className="row">
          {this.props.questions.map((data, index) => (
            <Card data={data} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.trivia.questions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalToggle: data => dispatch(modalOpen(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
