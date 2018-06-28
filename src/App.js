import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';
import Login from './Login';
import Home from './Home';
import Navbar from "./views/components/Navbar.js";
import { withRouter} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from './views/SignUp';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
    this.state = {
      complete: true,
      nameVal: ""
    }
    // this.state = {
    //   nameVal: ""
    // }

  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        var checkRegister = fire.firestore().collection('usuarios').doc(user.uid).get().then((u) => {
          console.log(u.data())
         console.log('then:', u.data().complete)
        
         if (u.data().complete == false) {
          this.setState({complete: false})
          console.log(this.state.complete)
        
         }else{
          localStorage.setItem('DocName', u.data().name);
         }
         
      });
       // console.log(checkRegister)
      //console.log(localStorage.getItem('user'))
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
        <div className="App">
          <Navbar />

         
          {this.state.complete ? (this.state.user ? (<Home />) : (<Login/>)) : (this.state.user ? (<SignUp />) : (<Login/>))}
          {/* <SignUp/> */}
          
        </div> 

    );
  }
}

export default App;
