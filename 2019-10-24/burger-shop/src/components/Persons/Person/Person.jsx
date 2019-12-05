import React from 'react'
import './Person.css'
import PersonInfo from './PersonInfo'
import PersonEdit from './PersonEdit'
import PropType from 'prop-types'
import { Card, Button } from 'react-bootstrap';

export default function Person(props) {


    return (

        <Card className="Person">
            {
                props.person.isEditMode ? 
                <PersonEdit 
                    person={props.person} 
                    jabCancelButtonClickHoTohKyaKaro={props.callMeWhenYouWantToDisableEdit}
                    saveEdit={props.callMeWhenYouEditPerson}
                 /> : 
                <PersonInfo person={props.person} jabEditButtonClickHoTohKyaKaro={props.callMeWhenYouWantToEnableEdit} deleteKaro={props.deleteKaro} />
            }
        </Card>


    )
}

Person.propTypes = {
    person: PropType.object,
    callMeWhenYouWantToEnableEdit: PropType.func,
    callMeWhenYouWantToDisableEdit: PropType.func,
    deleteKaro: PropType.func,
    callMeWhenYouEditPerson: PropType.func
}
