import React, {Component} from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Max',
            showLogo: false,
            loading: true
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        fetch('http://localhost:5555/')
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                this.setState({
                    showLogo: responseJSON.showLogo,
                    loading: false,
                    listarCursoPressed: false
                });
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    listarCurso(curso) {
        this.setState({
            listarCursoPressed: true
        });
    }

    render() {
        const {name, showLogo, loading, listarCursoPressed} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <span className="App-title" style={{
                        color: '#FFEF00',
                    }}>Dashboard cursos</span>
                    <div className="App-menu">
                        <span className="App-menu-item">
                            <a href="#" style={{
                                color:'#fff'
                            }} onClick={() => this.listarCurso('CIT3323')}>Listar Cursos</a></span>
                        <span className="App-menu-item">Detalle Curso</span>
                    </div>
                </header>

                <p className="App-intro">
                    {
                        !loading && listarCursoPressed
                            ?
                            <div><span>Presionar curso fue cliqueado</span></div>
                            :
                            <div><span>CLICK IT!</span></div>
                    }
                </p>
            </div>
        );
    }
}

export default App;
