import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import fire from './config/Fire';
import SignUp from './views/SignUp';
import firebase from 'firebase';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{
      fire.auth().onAuthStateChanged((user) =>  {
        fire.firestore().collection('usuarios').doc(user.uid).set({
          ID: user.uid,
          complete: false,
        }).then((response) => {
          console.log("Response:    ")
          console.log(response)
        }).catch((err) =>{
          console.log("Err:    ")
          console.log(err)
        })
      
      })

  
    }).catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      
      <div class="card card-container">
     
      <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin">
          <span id="reauth-email" class="reauth-email"></span>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" placeholder="Correo electrónico" required autofocus/>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password"  class="form-control" placeholder="Contraseña" required/>
          <div id="remember" class="checkbox">
              <label>
                  <input type="checkbox" value="remember-me"/> Recordarme
              </label>
          </div>
          <label className="d-none">Dummy text in here baby to server response</label>
          
          <button  onClick={this.login} class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Iniciar sesion</button>
          <button onClick={this.signup} className="btn btn-lg btn-primary btn-block btn-signup">Registrarme</button>
      </form>
      <a href="#" class="forgot-password">
          ¿Olvidaste tu contraseña??

      </a>
      {/* <a href="#" class="forgot-password">
          Registrarme

      </a> */}

  </div>

    );
  }
}
export default Login;
