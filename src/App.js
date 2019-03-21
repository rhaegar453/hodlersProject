import React,{Component} from 'react';
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import {Switch, Route} from 'react-router-dom';
import Answers from './Components/Answers';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Content}></Route>
          <Route path="/answers" component={Answers}></Route>
        </Switch>
      </div>
    );
  }
}