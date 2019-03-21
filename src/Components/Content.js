import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { modalOpen } from "../Store/Actions";
import Modal from "./ModelComponent";
import {withRouter} from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect=()=>{
      this.props.history.push('/answers');
  }

  render() {
    return (
      <div className="container">
        <Modal />
        <div className="row">
        <div style={{marginTop:'20px'}}>
            {this.props.questions.length==0?<div>
                <p>You've attempted all the questions. Please go to the answers section to submit.</p>
                <button className="btn btn-outline-info" style={{borderRadius:"10px"}} onClick={this.redirect}>Answers</button>
            </div>:null}
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
)(withRouter(Content));
