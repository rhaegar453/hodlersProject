import React, { Component } from "react";
import {connect} from 'react-redux';
import {modalOpen} from '../Store/Actions';


class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  modalToggle=()=>{
    this.props.modalToggle(this.props.index)
  }
  render() {
    return (
      <div className="col-md-4 col-sd-12" style={{marginTop:"15px"}}>
        <div class="card">
          <div class="card-header justify-content-center">{this.props.data.category}</div>
          <div class="card-body">
          <h5 class="card-title">{this.props.data.question}</h5>
            <div style={{display:'flex', justifyContent:'center'}}>
            <button className="btn btn-primary" onClick={this.modalToggle}>Answer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    modalToggle:(data)=>dispatch(modalOpen(data)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);