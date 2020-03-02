import React from 'react';

export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAdd(e){
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
                    <button type='submit'>Agregar</button>
                </form>
            </div>
        );
    }
}