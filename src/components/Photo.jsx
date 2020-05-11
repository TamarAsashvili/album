import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        const post = this.props.post

        return <figure className='figure'>
            <img className='photo' alt={post.description} src={post.imageLink} />
        </figure>
    }
}
