import	React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import fire from '../config/Fire';
 
import 'react-datepicker/dist/react-datepicker.css';

//import Login from '../Login';
class SignUp extends Component{
    constructor (props) {
        super(props)
        this.state = {
           // startDate: moment(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.signupComplete = this.signupComplete.bind(this);
        this.state = {
            name: '',
            lastName: '',
            //startDate: moment(),
            gender: false,
            proLicense: '',
            espLicense: '',
            especiality: '',
            licenseInstitution: '',
            razonSocial: '',
            header: '',
            address: '',
            phone: '',



          };
      }

      signupComplete(e){
        var uid = localStorage.getItem('user');
        var signUpComplete = fire.firestore().collection('usuarios').doc(uid);

        var setWithMerge = signUpComplete.set({
            name: this.state.name,
            lastName: this.state.lastName,
            //startDate: moment(),
            gender: this.state.gender,
            proLicense: this.state.proLicense,
            espLicense: this.state.espLicense,
            especiality: this.state.especiality,
            licenseInstitution: this.state.licenseInstitution,
            razonSocial: this.state.razonSocial,
            header: this.state.header,
            address: this.state.address,
            phone: this.state.phone,
            complete: true
        }, { merge: true })
        .then((response) => {
            console.log("Response:    ")
            console.log(response)
          }).catch((err) =>{
            console.log("Err:    ")
            console.log(err)
          })
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      handleChangeDate(date) {
        this.setState({
          startDate: date
        });
      }
    render() {

        return (  <div class="card card-container">
     
        <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <p id="profile-name" class="profile-name-card"></p>
        <form class="form-signin">
            <span id="reauth-email" class="reauth-email"></span>
            <input type="text" placeholder="Nombre" class="form-control" name="name" value={this.state.name} onChange={this.handleChange} required/>
            <input type="text" placeholder="Apellidos" class="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
            {/* <label className="mt-1">Fecha de nacimiento</label>
            <DatePicker class="form-control"
            name="startDate"
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
            /> */}
            <label className="mt-1">Sexo:</label>
            <div class="form-check">
                
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={this.handleChange} value={this.state.gender === 'Dr.'}  />
                <label class="form-check-label" for="exampleRadios1">
                    Masculino
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.handleChange} value={this.state.gender === 'Dra.'} />
                <label class="form-check-label" for="exampleRadios2">
                    Femenino
                </label>
            </div>
            <input type="text" placeholder="Cédula profesional" class="form-control mt-4" name="proLicense" onChange={this.handleChange} value={this.state.proLicense} required/>
            <input type="text" placeholder="Cédula de Especialidad (opcional) " class="form-control mt-4" onChange={this.handleChange} value={this.state.espLicense} name="espLicense" />
            <input type="text" placeholder="Especialidad" class="form-control mt-4" onChange={this.handleChange} value={this.state.especiality} name="especiality" />
            <input type="text" placeholder="Institucion que emite el titulo" class="form-control mt-4" onChange={this.handleChange} value={this.state.licenseInstitution} name="licenseInstitution" required/>
            <input type="text" placeholder="Razon social Hospital/Cliente" class="form-control mt-4" onChange={this.handleChange} value={this.state.razonSocial} name="razonSocial" required/>
            <input type="text" placeholder="Encabezado (opcional)" class="form-control mt-4" onChange={this.handleChange} value={this.state.header} name="header"/>
            <input type="text" placeholder="Dirección" class="form-control mt-4" name="address" onChange={this.handleChange} value={this.state.address} required/>
            {/* <input type="text" placeholder="Correo electronico" class="form-control mt-4" name="email" required/> */}
            <input type="text" placeholder="Teléfono de contacto" class="form-control mt-4" onChange={this.handleChange} value={this.state.phone} name="phone" required/>
           
            
            {/* <input type="text" placeholder="Nombre" class="form-control" name="name"/>
            <input type="text" placeholder="Nombre" class="form-control" name="name"/>
            <input type="text" placeholder="Nombre" class="form-control" name="name"/> */}
            {/* <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" placeholder="Correo electrónico" required autofocus/>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password"  class="form-control" placeholder="Contraseña" required/> */}
            {/* <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"/> Recordarme
                </label>
            </div> */}
            <button onClick={this.signupComplete}  class="btn btn-lg btn-primary btn-block btn-signin mt-2" type="submit">Registrarme</button>
            {/* <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-lg btn-primary btn-block">Registrarme</button> */}
        </form>
        <a href="#" class="forgot-password">
            Iniciar sesion
  
        </a>
  
    </div>)
    }
}

export default SignUp;