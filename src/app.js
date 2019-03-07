
class Sorteador extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.state = {
            options : ['opcion 1', 'opcion 2', 'opcion 3']
        }
    }

    handleDelete(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }

    handleSort(){
     const randNum = Math.floor(Math.random()* this.state.options.length);
     const option = this.state.options[randNum];
     alert(option);
    }

    render(){
        const title = 'Sorteador';
        const subtitle = 'Elije un ganador al azar!';
        

        return(
            <div>
            <Header title={title} subtitle ={subtitle}/>
            <Action hasOption= {this.state.options.length > 0} handleSort ={this.handleSort}/>
            <Options options = {this.state.options} handleDelete = {this.handleDelete}/>
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
   
    render(){
        return(
            <div>
                <button onClick={this.props.handleSort} disabled = {!this.props.hasOption}>Sortear!</button>
            </div>
        );
    }
}

class Options extends React.Component{
  
    render(){
        return(
            <div>
                <button onClick={this.props.handleDelete}>Borrar Todos</button>
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