

const app = {
    title: 'Sorteador',
    subtitle:'',
    options:[]
}

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option= e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
}

const onDeleteAll = () =>{
    app.options = [];
    renderTemplate();
}

const appRoot = document.getElementById('app');

const renderTemplate = ()=> {
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Opciones: ' : 'Agrega una opcion'}</p>
            <ol>
                {app.options.length}
            </ol>
            {app.options.length > 0 && <button onClick = {onDeleteAll}>Borrar Todos</button>}
            <form onSubmit= {onFormSubmit}>
                <input type = 'text' name= 'option'></input>
                <button>Agregar</button>
            
            </form>
        </div>
    );


    ReactDOM.render(template,appRoot);
            
}
renderTemplate();