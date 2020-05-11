import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts = [{
    id: '0',
    description: 'elian beautikdfdskl',
    imageLink: 'https://cdn3.vectorstock.com/i/1000x1000/71/87/coffe-2-new-1-vector-1797187.jpg'
},
{
    id: '1',
    description: 'elian beautikdfdskl',
    imageLink: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/96/7f/97/coffe-latte-100-arabica.jpg'
},
{
    id: '2',
    description: 'elian beautikdfdskl',
    imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRDN4krPBCKdnVygKHsJJdBkS39eAMjo9qC8DCroy05BsVMAij&usqp=CAU'
},
{
    id: '3',
    description: 'elian beautikdfdskl',
    imageLink: 'https://static.turbosquid.com/Preview/2016/07/04__14_12_56/1.png1099343B-CB1E-4859-808F-C8AB319102C6Original.jpg'
}
]


export default class Main extends Component {
    render() {
        return (
            <div>

                <Title title={'Photo Gallery'} />
                <PhotoWall posts={posts} />

            </div>
        )
    }
}
