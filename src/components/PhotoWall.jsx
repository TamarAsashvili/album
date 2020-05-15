import React from 'react'
import Photo from './Photo'
import { CardDeck, Container } from 'react-bootstrap';

function PhotoWall(props) {
    return (
        <div>
            <Container >
                <CardDeck >
                    {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
                </CardDeck>
            </Container>

        </div>
    )
}



export default PhotoWall;