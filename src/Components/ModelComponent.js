import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { modalOpen, answerQuestion } from "../Store/Actions";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      options:[],
      yourAnswer:''
    }
  }
  componentWillReceiveProps(props){
    let arr=[];
    let randomNumber=Math.floor(Math.random()*3);
    arr.push(...props.modalData.incorrect_answers);
    arr.splice(randomNumber,0, props.modalData.correct_answer);
    this.setState({options:arr})
  }

  answerQuestion=()=>{
      let data={};
      data.id=this.props.modalData.id;
      data.answer=this.state.yourAnswer
      this.props.answerQuestion(data);
      this.props.modalToggle();
      this.setState({yourAnswer:''});
  }

  changeValue=(e)=>{
    this.setState({yourAnswer:e.target.value});
  }

  render() {
    const disabled=this.state.yourAnswer.length==0?'disabled':'';
    return (
      <div>
        <Modal show={this.props.modalState} onHide={this.props.modalToggle}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalData.question}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Your Answer</label>
                <select className="form-control" onChange={this.changeValue}>
                <option disabled selected>--Select One---</option>
                  {this.state.options.map(data=>(
                    <option value={data}>{data}</option>
                  ))}
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
                  <button className="btn btn-primary" disabled={disabled} onClick={this.answerQuestion}>Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalState:state.trivia.modalState,
    modalData:state.trivia.modalData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalToggle: data => dispatch(modalOpen(data)),
    answerQuestion:data=>dispatch(answerQuestion(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
