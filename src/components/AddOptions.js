import React from 'react';
 

export default class AddOptions extends React.Component{
    state = {
        error: undefined
    };

    handleAdd = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error:error}));

    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAdd}>
                    <input type='text' name='option'></input>
                    <button className="button">Agregar</button>
                </form>
            </div>
        );
    }
}
