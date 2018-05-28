import React, {Component} from 'react';
import './App.css';
import {Curso} from './Curso';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listarCursoPressed: false,
            cursos: []
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

    listarCursos() {
        fetch('http://localhost:5555/class/')
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                this.setState({
                    listarCursoPressed: true,
                    cursos: responseJSON.data
                });
            })
            .catch(error => {
                console.log(':(', error);
            })
        //

    }

    render() {
        const {loading, listarCursoPressed, cursos} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <span className="App-title" style={{
                        color: '#FFEF00',
                    }}>Dashboard cursos</span>
                    <div className="App-menu">
                        <span className="App-menu-item">
                            <a href="#" style={{
                                color: '#fff'
                            }} onClick={() => this.listarCursos()}>Listar Cursos</a></span>
                        <span className="App-menu-item">Detalle Curso</span>
                    </div>
                </header>

                <div className="App-intro">
                    {
                        !loading && listarCursoPressed
                            ?
                            <div>
                                {
                                    cursos.map((curso, ix) =>
                                        <Curso name={curso.name}
                                               year={curso.year}
                                               code={curso.code}
                                               section={curso.section}
                                               semester={curso.semester}
                                               key={ix}
                                        />
                                    )
                                }
                            </div>
                            :
                            <div><span>CLICK IT!</span></div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
