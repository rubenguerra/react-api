import React, { Component } from 'react';

class Buscador extends Component{

busquedaRef=React.createRef();

obtenerDatos=(e) => {
  e.preventDefault();

  //Tomamos valor del input y enviamos al componente principal
  //En este caso index.js

  const termino=this.busquedaRef.current.value
  console.log(this.busquedaRef.current.value);
  this.props.datosBusqueda(termino);

}

  render(){
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">

          <div className="form-group col-md-8">
          <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Fútbol"/>
          </div>
          <div className="form-group col-md-4">
          <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;