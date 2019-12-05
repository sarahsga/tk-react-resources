import './PersonEdit.css'
import PropType from 'prop-types'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react'

export default class PersonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myPerson: props.person
        }
    }

    render() {
        return (
            <Card.Body className="PersonInfo">
            <Card.Title>Edit Person {this.state.myPerson.name}</Card.Title>
            <Card.Text>
                <input value={this.state.myPerson.name} onChange={
                    (abc) => {
                        console.log(abc.target.value)
                        this.setState({
                            myPerson: {
                                name: abc.target.value
                            }
                        });
                        
                    }
                } />
                <input type="number" value={this.state.myPerson.age} />
                <textarea value={this.state.myPerson.description} />
            </Card.Text>
            <ButtonGroup className="button-group" aria-label="Basic example">
                <Button variant="light" onClick={
                    () => this.props.saveEdit(this.state.myPerson)
                }
                >
                    <FontAwesomeIcon className="text-info" icon={faCheck} />
                </Button>
                <Button variant="light" onClick={this.props.jabCancelButtonClickHoTohKyaKaro}>
                    <FontAwesomeIcon className="text-danger" icon={faTimes} />
                </Button>
            </ButtonGroup>
        </Card.Body>
        )
    }
}

PersonEdit.propTypes = {
    person: PropType.object,
    jabCancelButtonClickHoTohKyaKaro: PropType.func,
    saveEdit: PropType.func
}