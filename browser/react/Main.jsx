// var React = require('react');
import React, { Component } from 'react';

import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'


const fakeAlbums = [
{
    name: 'Abbey Road',
    id: 1,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
    {
        id: 1,
        name: 'Romeo & Juliette',
        artists: [ 
        { name: 'Bill' } 
        ],
        genre: 'Funk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
    }, 
    {
        id: 2,
        name: 'White Rabbit',
        artists: [
        { name: 'Bill' }, 
        { name: 'Alice' }
        ],
        genre: 'Fantasy',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
    }, 
    {
        id: 3,
        name: 'Lucy in the Sky with Diamonds',
        artists: [ 
        { name: 'Bob' } 
        ],
        genre: 'Space',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
    }
    ]
},
{
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
    {
        id: 4,
        name: 'London Calling',
        artists: [ 
        { name: 'Bill' } 
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
    }
    ]
}
];

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            album: fakeAlbums
        }
    }

    render() {
        return (
            <div id="main" className="container-fluid">

                    <Sidebar/>
                        
                        <div className="col-xs-10">
                            <div className="albums">
                            <h3>Albums</h3>
                            <div className="row">
                                <div className="col-xs-4">
                                    <a className="thumbnail" href="#">
                                        <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
                                        <div className="caption">
                                            <h5>
                                                <span>{this.state.album[0].name}</span>
                                            </h5>
                                            <small>{this.state.album[0].songs[0].name}</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a className="thumbnail" href="#">
                                        <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
                                        <div className="caption">
                                            <h5>
                                                <span>{this.state.album[1].name}</span>
                                            </h5>
                                            <small>{this.state.album[1].songs[0].name}</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </div>
                    </div>

                    <Footer/>

                </div>
        )
    }; 
}

export default Main;