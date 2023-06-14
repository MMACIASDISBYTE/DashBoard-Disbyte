import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// estilos bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

<Card style={{ width: '18rem' }} className="border border-info">
  {/* Contenido de la tarjeta */}
</Card>

export const CardProfile = () => {
    const { user } = useAuth0();
    const roles = user['dev-7qwkde4r318nfwz7/roles'];
    const firstRole = roles && roles.length > 0 ? roles[0] : null;
    useEffect(() =>{
        console.log({user})
    },[])
    
    return (
        <>
        <div className='d-flex justify-content-center text-center mt-5 ml-5'>
            <Card style={{ width: '18rem'} }>
                <Card.Img variant="top" src={user.picture} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{user.email}</ListGroup.Item>
                    <ListGroup.Item>Roll: {firstRole} </ListGroup.Item>
                    <ListGroup.Item>{user.phone_number}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}
