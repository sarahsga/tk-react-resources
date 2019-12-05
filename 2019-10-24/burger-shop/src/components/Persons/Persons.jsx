import './Persons.css';
import Person from './Person/Person';

import React, { Component } from 'react'

export default class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personsData: [
                {
                    "name": "Bushra",
                    "age": 10,
                    "description": "Chef at Marriott",
                    "isEditMode": false
                },
                {
                    "name": "Dua",
                    "age": 2,
                    "description": "Happiness Officer",
                    "isEditMode": false
                },
                {
                    "name": "Aliza",
                    "age": 5,
                    "description": "Comedian on Youtube",
                    "isEditMode": false
                }
            ]
        }
    }

    editPerson = (person, newPerson) => {
        
        this.setState({
            personsData: this.state.personsData.map(pInner => {
                if(pInner.name === person.name) {
                    console.log("inside if", person, newPerson);
                    return Object.assign(pInner, newPerson);
                } else {}
                return pInner;
            })
        })
    }

    deletePerson = (personClicked) => {
        this.setState({
            personsData: this.state.personsData.filter(person => person.name !== personClicked.name)
        })
    }

    toggleEditMode = (personClicked, newValue) => {
        this.setState({
            personsData: this.state.personsData.map(pInner => {
                if(pInner.name === personClicked.name) {
                    pInner.isEditMode = newValue;
                } else {}
                return pInner;
            })
        })
    }

    render() {
        return (
            <div className="Persons">
                <h1>Persons abc</h1>
                {
                    this.state.personsData.map(person => {
                        return <Person person={person} 
                        deleteKaro={
                            () => this.deletePerson(person)
                        }
                        callMeWhenYouEditPerson={
                            (newPerson) => {
                                console.log(newPerson);
                                this.editPerson(person, newPerson);
                                this.toggleEditMode(person, false)
                            }
                        }
                        callMeWhenYouWantToEnableEdit={
                            () => this.toggleEditMode(person, true)
                        } callMeWhenYouWantToDisableEdit={
                            () => this.toggleEditMode(person, false)
                        } />
                    })
                }
            </div>
        )
    }
}