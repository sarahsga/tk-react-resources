import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PersonView({ person, toggleEditMode }) {
    const { name, age, description } = person;

    return (
        <>
            <Card.Title>{name}, {age}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <ButtonGroup aria-label="Controls" className="buttons-container">
                <Button variant="light" className="text-info" onClick={toggleEditMode}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button variant="light" className="text-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </ButtonGroup>
        </>
    )
}
