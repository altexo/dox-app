import React, { Component } from 'react';
import fire from '../../config/Fire';
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/icomoon/user'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
          user: {},
        }
      }
    logout() {
        fire.auth().signOut();
    }
    componentDidMount(){
        this.authListener();
      }
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
           // localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            //localStorage.removeItem('user');
          }
        });
      }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand text-white" href="#">Dox</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link text-white" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link text-white" href="#">Link</a>
                    </li> */}
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                    {this.state.user ? (
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <Icon  icon={user} />
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" onClick={this.logout}>Cerrar Sesion</a>
                        
                            </div>
                        </li>
                        ) : (<div></div>)
                    }
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0"> */}
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    {/*{this.state.user ? ( <button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.logout}>Cerrar sesion</button> ) : (<div></div>) }*/}
                    {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Icon  icon={user} />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                    

                   
                    {/* </form> */}
                </div>
                </nav>
        );
    }
    }

export default Navbar