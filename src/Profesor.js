import React, {Component} from 'react';

export class Profesor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            rut: props.rut,
            email: props.email,
            maxGrade: props.maxGrade,
        }
    }

    render() {
        const {name, rut, email, maxGrade} = this.state;
        return <p style={{
            backgroundColor: '#000000',
            color:'yellow'
        }}>
            {name}<br/>
            {rut}<br/>
            {email}<br/>
            {maxGrade}<br/>
        </p>
    }
}