
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Sorteador</h1>
                <h2>Deja el azar en manos de la inteligencia artificial</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>Sortear!</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        );
    }
}

class AddOptions extends React.Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));