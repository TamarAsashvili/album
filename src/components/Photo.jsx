import React from 'react'
import PropTypes from 'prop-types'
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
                        <Button variant="info" onClick={() => {
                            props.onRemovePhoto(post)
                        }}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo
