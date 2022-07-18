import React from 'react';
import './style.scss';

// estamos criando um botão que estende do react component,
// então ele também vai ser um componente react
class Botao extends React.Component{
    render() {
        //O return retorna um HTML, podemos escrever javaScript nesse HTML
        return(
            <button className='botao'>
                Botão
            </button>
        )
    }
}

export default Botao;


// Botão terciario   --     style={styles}
//                          const estaAtivo = true;
//                          const styles = {
//            backgroundColor: estaAtivo ? "green" : "red"
//        }