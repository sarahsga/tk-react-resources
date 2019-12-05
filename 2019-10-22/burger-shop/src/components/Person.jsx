import React from 'react';
import Card from 'react-bootstrap/Card';

import './Person.css'
import PersonEdit from './PersonEdit';
import PersonView from './PersonView';

export default function Person({ person, toggleEditMode, savePersonChange }) {
    return (
        <Card style={{ width: '18rem' }} className="Person">
            <Card.Body>
                {person.isEditMode ? <PersonEdit person={person} save={(newPerson) => { savePersonChange(newPerson) }} cancelEditMode={() => toggleEditMode(false)} /> : <PersonView person={person} toggleEditMode={() => toggleEditMode(true)} />}

            </Card.Body>
        </Card>
    )
}
