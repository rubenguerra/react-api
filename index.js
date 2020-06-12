import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Buscador from './componentes/Buscador';

class App extends Component {
  
  state={
    termino:''
  }
  
consultarApi= ()=>{
  const termino=this.state.termino;
  const url='https://pixabay.com/api/?key={ KEY }&q=${termino}';
  console.log(url);

}

datosBusqueda =(termino) =>{
  this.setState({
    termino
  }, ()=>{
    this.consultarApi();
  })
}
  render() {
    return (
      <div className="container">
        
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador
        datosBusqueda={this.datosBusqueda}
        />
        </div>
        {this.state.termino}
        

        <p>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
