import React from 'react';
import Option from './Option';

 const Options = (props)=>(
        <div>
            <button onClick={props.handleDelete}>Borrar Todos</button>
            {props.options.length === 0 && <p>Agrega una opcion para comenzar</p>}
            {props.options.map((op) => (
                 <Option
                     key={op} 
                     option={op}
                     handleDeleteOption = {props.handleDeleteOption}
                />))}
            
        </div>
    );


export default Options;