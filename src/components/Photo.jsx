import React from 'react'
import { Button, Card } from 'react-bootstrap';

function Photo(props) {
    const post = props.post;
    return (

        <div>
            <Card style={{ width: '20rem', border: '3px solid #d3d3d3', padding: '1rem', margin: '20px' }} >
                <Card.Img variant="top" alt={post.description} src={post.imageLink} />
                <Card.Body>
                    <Card.Title>{post.description}</Card.Title>
                    <div>
                        <Button variant="info">Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Photo
