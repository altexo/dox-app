import React, { Component } from 'react';
import fire from './config/Fire';
import './Home.css';

import MedicineSearch from './views/components/MedicineSearch';
// import { db } from './config/Fire';

// db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });

class Home extends Component {
  
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._createRecipe = this._createRecipe.bind(this);
        this.state = {
            patientName: '',
            patientAge: '',
            patientAddress: '',
            patientCurp: '',
            diagnosis: '',
            patientEmail: '',
            name: '',
            instructions: '',  
            // medicine: [{
            //     name: '',
            //     instructions: ''    
            // }],



        }
     
        this.state ={
            docName: localStorage.getItem('DocName')
        }
        this.components = {
            'dynamic': MedicineSearch
        }
       
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    logout() {
        fire.auth().signOut();
    }
    _createRecipe(){
        console.log('Starting..')
        console.log(this.state.patientEmail)
        var uid = localStorage.getItem('user');
      
        //const timestamp = fire.firestore().FieldValue.serverTimestamp()
        var recepie = fire.firestore().collection('usuarios').doc(uid).collection('recetas').doc('pacientes').collection(this.state.patientEmail).doc();
        recepie.set({
            patientName: this.state.patientName,
            patientAge: this.state.patientAge,
            patientAddress: this.state.patientAddress,
            patientCurp: this.state.patientCurp,
            diagnosis: this.state.diagnosis,
            patientEmail: this.state.patientEmail,
            name: this.state.name,
            instructions: this.state.instructions,  
         
        }).then((u)=> console.log('success: ', u))
        .catch((u)=> console.log('Err: ', u))
    }

    render() {
        const Name = this.components[this.props.dynamic];
        // let appendThis = (
        //     <div class="col-md-12 row">
        //     <div class="form-group col-md-6">
        //         <label for="medicamento-search">Nombre general del medicamento</label>
        //         <input type="text" class="form-control" id="medicamento-search" onChange={this.handleChange} value={this.state.name} name="name[]" placeholder="Medicamento.."/>
        //     </div>
        //     <div className="form-group col-md-6 align-middle">
        //         <label for="medicamento-search">Indicaciones y Duración del Tx:</label>
        //         <input type="text" class="form-control" id="medicamento-ins"name="instructions" onChange={this.handleChange} value={this.state.instructions} placeholder="Instrucciones.."/>
        //     </div>
        //     </div>
        // )
        return (
            
            <div class="card col-md-8 ">
          <h3 class="text-center">Doctor: {this.state.docName}</h3>
            <div class="card-body row">
            {/* <form className="row"> */}
                        
                            <div class="form-group col-md-4">
                                <label for="exampleInputEmail1 text-right" >Nombre del paciente</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} value={this.state.patientName} name="patientName" placeholder="Nombre"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="age text-right" >Edad del paciente</label>
                                <input type="number" class="form-control" id="age" aria-describedby="emailHelp" onChange={this.handleChange} value={this.state.patientAge} name="patientAge" placeholder="Edad"/>
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputPassword1">Domicilio del paciente</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" onChange={this.handleChange} value={this.state.patientAddress} name="patientAddress" placeholder="Domicilio"/>
                            </div>
                       
                            <div class="form-group col-md-4">
                                <label for="curpPaciente">CURP del paciente (Opcional)</label>
                                <input type="text" class="form-control" id="curpPaciente" onChange={this.handleChange} value={this.state.patientCurp} name="patientCurp" placeholder="CURP"/>
                            </div>
                            <div class="form-group col-md-8">
                                <label for="email">Correo o numero de teléfono (Necesario para identificar al paciente)</label>
                                <input type="text" class="form-control" id="email" onChange={this.handleChange} value={this.state.patientEmail} name="patientEmail" placeholder="Email o teléfono"/>
                            </div>
                      
                            <div class="form-group col-md-12">
                                <label for="exampleFormControlTextarea1">Diagnostico</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.handleChange} value={this.state.diagnosis} name="diagnosis" rows="1"></textarea>
                            </div>
                            <div class="col-md-12 row">
                                <div class="form-group col-md-6">
                                    <label for="medicamento-search">Nombre general del medicamento</label>
                                    <input type="text" class="form-control" id="medicamento-search" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Medicamento.."/>
                                </div>
                                <div className="form-group col-md-6 align-middle">
                                    <label for="medicamento-search">Indicaciones y Duración del Tx:</label>
                                    <input type="text" class="form-control" id="medicamento-ins"name="instructions" onChange={this.handleChange} value={this.state.instructions} placeholder="Instrucciones.."/>
                                </div>
                            </div>
                           
                            {/* {appendThis} */}
                            <div className="form-group col-md-12 ">
                                <button className="btn btn-success col-md-12">Añadir otro medicamento</button>
                            </div>
                            <div class="panel-footer mt-5 center-block mx-auto"><button  onClick={this._createRecipe} class="btn btn-primary center-block">Enviar e imprimir</button></div>
                        {/* </form> */}
            
            </div>
            <div class="card-footer text-muted text-right">
              16 de Junio de 2018
            </div>
          </div>
 
        )

    };

}

export default Home;
