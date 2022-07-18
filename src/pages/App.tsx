import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;

// <Botao />   -> para renderizar o conteudo do component, passamos o nome do component
//                dentro das tags HTML, como o explo.