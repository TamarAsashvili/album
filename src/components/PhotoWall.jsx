import React from 'react'
import PropTypes from 'prop-types'

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

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;