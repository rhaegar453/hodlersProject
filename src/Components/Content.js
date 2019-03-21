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
        <div style={{marginTop:'20px'}}>
            {this.props.questions.length==0?<p>You've attempted all the questions</p>:null}
        </div>
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
