import React, {Component} from 'react';


const ListItem=(props)=>{
    return(
        <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.data.question}
        <span class="badge badge-danger badge-pill">{props.data.myAnswer}</span>
      </li>
    );
}

export default ListItem