
class Sorteador extends React.Component {
    render(){
        const title = 'Sorteador';
        const subtitle = 'Elije un ganador al azar!';
        const options = ['opcion 1', 'opcion 2', 'opcion 3'];

        return(
            <div>
            <Header title={title} subtitle ={subtitle}/>
            <Action/>
            <Options options = {options}/>
            <AddOptions />
            </div>
            
        )
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handleSort(){
        console.log('sorteando')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleSort}>Sortear!</button>
            </div>
        );
    }
}

class Options extends React.Component{
   handleDel(){
       console.log('borrando')
   }
    render(){
        return(
            <div>
                <button onClick={this.handleDel}>Borrar Todos</button>
                {this.props.options.map(op => <Option key={op} option={op}/>)}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <li>
                    {this.props.option}
                </li>  
            </div>
        )
    }
}

class AddOptions extends React.Component{
    handleAdd(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            console.log('add value')
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAdd}>
                    <input type='text' name='option'></input>
                    <button type='submit'>Agregar</button>
                </form>
            </div>
        );
    }
}




ReactDOM.render(<Sorteador/>, document.getElementById('app'));