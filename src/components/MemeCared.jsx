import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MemeCared(props) {

    const navigate = useNavigate()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    
                    <Button variant="primary" onClick={e => navigate(`/edit?url=${props.img}`)}>Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MemeCared
