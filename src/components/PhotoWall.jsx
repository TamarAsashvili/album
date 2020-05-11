import React, { Component } from 'react'
import Photo from './Photo'
import { CardDeck, Container } from 'react-bootstrap';

class PhotoWall extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CardDeck>
                        {this.props.posts.map((post, index) => <Photo key={index} post={post} />)}
                    </CardDeck>
                </Container>

            </div>
        )
    }
}

export default PhotoWall;