import React from 'react';

const Action = (props)=>(
        <div>
            <button onClick={props.handleSort} disabled = {!props.hasOption}>Sortear!</button>
            
        </div>
    );

export default Action;