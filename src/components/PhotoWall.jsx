import React from 'react'
import Photo from './Photo'
import { CardDeck, Container } from 'react-bootstrap';

function PhotoWall(props) {
    return (
        <div>
            <Container style={{ width: '1500px' }}>
                <CardDeck >
                    {props.posts.map((post, index) => <Photo key={index} post={post} />)}
                </CardDeck>
            </Container>

        </div>
    )
}



export default PhotoWall;