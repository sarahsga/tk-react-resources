import React from 'react'
import Person from './Person.jsx'
import './Persons.css'

import { Component } from 'react'

export default class Persons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "persons": [
                {
                    "id": 1,
                    "name": "Bushra",
                    "age": 10,
                    "description": "Chef at Marriott",
                    "isEditMode": false

                },
                {
                    "id": 2,
                    "name": "Aliza",
                    "age": 5,
                    "description": "Comedian on Youtube",
                    "isEditMode": false
                },
                {
                    "id": 3,
                    "name": "Dua",
                    "age": 2,
                    "description": "Happiness Officer",
                    "isEditMode": false

                }
            ]
        }
    }

    toggleEditMode(person, value) {
        const otherPersons = this.state.persons.filter(p => p.id !== person.id);
        person.isEditMode = value;
        this.setState({
            persons: [...otherPersons, person]
        })
    }

    changePerson(newPerson) {
        newPerson.isEditMode = false;
        const otherPersons = this.state.persons.filter(p => p.id !== newPerson.id);
        this.setState({
            persons: [...otherPersons, newPerson]
        })
    }

    render() {
        return (
            <div className="Persons">
                <h1>Persons</h1>
                <ul>
                    {this.state.persons.sort((p1, p2) => p1.id > p2.id ? 1 : -1).map(person => <Person key={person.name} person={person} toggleEditMode={(value) => this.toggleEditMode(person, value)} savePersonChange={(newPerson) => this.changePerson(newPerson)} cancelEditMode={() => this.toggleEditMode(person, false)} />)}
                </ul>
            </div>
        )
    }
}