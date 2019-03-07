
class Sorteador extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
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

    handleAddOption(option){
        if(!option){
            return 'Ingrese una opcion valida';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Esa opcion ya existe';
        }

        this.setState((prevState)=>{
            return({
                options: prevState.options.concat(option)
            })
        })
    }
    render(){
        const title = 'Sorteador';
        const subtitle = 'Elije un ganador al azar!';
        

        return(
            <div>
            <Header title={title} subtitle ={subtitle}/>
            <Options options = {this.state.options} />
            <AddOptions handleAddOption = {this.handleAddOption}/>
            <Action hasOption= {this.state.options.length > 0} handleSort ={this.handleSort} handleDelete = {this.handleDelete}/>
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
                <button onClick={this.props.handleDelete}>Borrar Todos</button>
            </div>
        );
    }
}

class Options extends React.Component{
  
    render(){
        return(
            <div>
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
        this.setState(()=>{
            return{error: error}
        })

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




ReactDOM.render(<Sorteador/>, document.getElementById('app'));
