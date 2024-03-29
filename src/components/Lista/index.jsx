import React from "react";
import './style.scss';

function Lista(){
    const tarefas = [{
        terefa: 'React',
        tempo: '02:00:00'
    },{
        terefa: 'JavaScript',
        tempo: '01:00:00'
    },{
        tarefa: 'typeSCript',
        tempo:'02:00:00'
    }]
    return(
        <aside className="listaTarefas">
            <h2>Ações do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className='item'>
                        <h3> {item.terefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
