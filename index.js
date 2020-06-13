import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Buscador from './componentes/Buscador';

class App extends Component {
  
  state={
    termino:'',
    imagenes: []
  }
  
consultarApi = () => { 
  const termino=this.state.termino;
  const url='https://pixabay.com/api/?key=17026416-157ce548823c2219f9122218c&q=termino&per_page=30';
  
  fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=>this.setState({imagenes: resultado}))

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
        

        <p></p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
