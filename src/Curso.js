import React, {Component} from 'react';
import {Alumno} from './Alumno';
import {Profesor} from './Profesor';

export class Curso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            code: props.code,
            section: props.section,
            year: props.year,
            semester: props.semester,
            alumnosLoaded: false,
            alumnos: [],
            profesores: []
        }
    }

    loadAlumnos() {
        this.setState({
            alumnosLoaded: true
        });
        fetch('http://localhost:5555/class/' +
            this.state.code +
            '/' +
            this.state.section)
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                this.setState({
                    listarCursoPressed: true,
                    alumnos: responseJSON.data.students,
                    profesores: responseJSON.data.teachers
                });
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    render() {
        const {name, code, section, year, semester, alumnosLoaded, alumnos, profesores} = this.state;
        return <div>
            <p>
                <a href='#' onClick={() => this.loadAlumnos()}>
                    {name}<br/>
                    {code}-{section}<br/>
                    {semester}-{year}<br/>
                </a>
            </p>
            {
                alumnosLoaded ?
                    profesores.map((profesor, ix) =>
                        <Profesor name={profesor.name}
                                  rut={profesor.rut}
                                  email={profesor.email}
                                  maxGrade={profesor.maxGrade} key={ix}
                        />
                    )
                    : ''
            }
            {
                alumnosLoaded ?
                    alumnos.map((alumno, ix) =>
                        <Alumno name={alumno.name}
                                rut={alumno.rut}
                                email={alumno.email}
                                startYear={alumno.startYear}
                                ranking={alumno.ranking}
                                schoolRanking={alumno.schoolRanking}
                                key={ix}
                        />
                    )
                    :
                    <div>No cargados</div>
            }

        </div>
    }
}