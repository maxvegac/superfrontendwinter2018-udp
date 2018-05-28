import React, {Component} from 'react';

export class Alumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            rut: props.rut,
            email: props.email,
            startYear: props.startYear,
            ranking: props.ranking,
            schoolRanking: props.schoolRanking
        }
    }

    render() {
        const {name, rut, email, startYear, ranking, schoolRanking} = this.state;
        return <p>
            {name}<br/>
            {rut}<br/>
            {email}<br/>
            {startYear}<br/>
            {ranking}<br/>
            {schoolRanking}<br/>
        </p>
    }
}