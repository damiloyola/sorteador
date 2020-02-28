
class Sorteador extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options : []
        };
    }


    componentDidUpdate(prevProps,prevState){
      if( prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
      }
    
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({ options }));
            }   
        }catch(e){

        }
     
        
    }


    handleDelete(){
        this.setState(()=>({options:[]}));
    }
    
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>option !== optionToRemove)
        }))
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

        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }
    render(){
        const title = 'Sorteador';
        const subtitle = 'Elije un ganador al azar!';
        

        return(
            <div>
            <Header title={title} subtitle ={subtitle}/>
            <Options options = {this.state.options} handleDelete = {this.handleDelete} handleDeleteOption = {this.handleDeleteOption}/>
            <AddOptions handleAddOption = {this.handleAddOption}/>
            <Action hasOption= {this.state.options.length > 0} handleSort ={this.handleSort} />
            </div>
            
        )
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}


const Action = (props)=>{
    return(
        <div>
            <button onClick={props.handleSort} disabled = {!props.hasOption}>Sortear!</button>
            
        </div>
    );
}


const Options = (props)=>{
    return(
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
}

const Option = (props)=>{
    return(
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




ReactDOM.render(<Sorteador/>, document.getElementById('app'));
