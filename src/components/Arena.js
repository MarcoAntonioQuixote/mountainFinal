import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Arena({combatants}) {

    const showStudents = combatants.map((student) => {
        return (
            <Card key={student.id} className='student'>
                <Card.Img variant="top" className='studImg' src={`${student.image}`} />
                <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    })

  return (
    <div className='arena'>
        {showStudents}
    </div>
  )
}

export default Arena