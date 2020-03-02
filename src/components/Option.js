import React from 'react';

const Option = (props)=>(
        <div>
            <li>
                {props.option}
                <button 
                    onClick={(e)=>{
                        props.handleDeleteOption(props.option);
                    }}
                >
                   Borrar
                </button>
            </li>  
        </div>
    )


export default Option;