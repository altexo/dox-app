import React, { Component } from 'react'

class MedicineSearch extends Component {
    render() {
      return (
        <div class="col-md-12 row">
        <div class="form-group col-md-6">
            <label for="medicamento-search">Nombre general del medicamento</label>
            <input type="text" class="form-control" id="medicamento-search" /*onChange={this.handleChange} value={this.state.name}*/ name="name" placeholder="Medicamento.."/>
        </div>
        <div className="form-group col-md-6 align-middle">
            <label for="medicamento-search">Indicaciones y Duración del Tx:</label>
            <input type="text" class="form-control" id="medicamento-ins"name="instructions" /*onChange={this.handleChange} value={this.state.instructions}*/ placeholder="Instrucciones.."/>
        </div>
        </div>
      )
    }
}
export default MedicineSearch;