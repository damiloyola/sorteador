import React from 'react';

const Option = (props)=>(
        <div>
            <li>
                {props.option}
                <button className="button button--link"
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