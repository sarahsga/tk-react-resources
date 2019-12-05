import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PersonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: this.props.person
        }
    }

    changeName(e) {
        const newValue = e.target.value
        this.setState((prevState) => ({
            person: { ...prevState.person, name: newValue }
        }))
    }

    changeAge(e) {
        console.log(e.target.value)
        const newValue = e.target.value

        this.setState((prevState) => ({
            person: { ...prevState.person, age: parseInt(newValue) }
        }))
    }

    changeDescription(e) {
        const newValue = e.target.value
        this.setState((prevState) => ({
            person: { ...prevState.person, description: newValue }
        }))
    }

    render() {
        const { name, age, description } = this.state.person;
        return (
            <>
                <Card.Title>Edit Person</Card.Title>
                <input value={name} type="text" onChange={(text) => this.changeName(text)} />
                <input value={age} type="number" onChange={(text) => this.changeAge(text)} />
                <textarea type="number" onChange={(text) => this.changeDescription(text)}>{description}</textarea>
                <ButtonGroup aria-label="Controls" className="buttons-container">
                    <Button variant="light" className="text-info" onClick={() => this.props.save(this.state.person)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    <Button variant="light" className="text-danger" onClick={this.props.cancelEditMode}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </ButtonGroup>
            </>
        )
    }
}
