import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';


export default class Photo extends Component {
    render() {
        const post = this.props.post

        return (
            <Card style={{ width: '18rem' }} border="info" >
                <Card.Img variant="top" alt={post.description} src={post.imageLink} />
                <Card.Body>
                    <Card.Title>{post.description}</Card.Title>
                    <Button variant="primary">Remove</Button>
                </Card.Body>
            </Card>
        )




    }
}
