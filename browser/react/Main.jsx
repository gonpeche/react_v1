import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import Albums from './Albums.jsx'
import axios from 'axios';
import SingleAlbum from './SingleAlbum'


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            selectedAlbums: {}
        }
        this.handleClick = this.handleClick.bind(this)
        this.reset = this.reset.bind(this)
        this.play = this.play.bind(this)
    }

    componentDidMount() {
        axios.get('/api/albums')
        .then( response => this.setState({albums: response.data})
        )
        .catch( e => console.log(e))
    }

    handleClick(albumID) {
        axios.get(`/api/albums/${albumID}`)
        .then(res => res.data)
        .then(album => this.setState({selectedAlbums: album}))
        .catch( e => console.log(e))
    }
    
    reset() {
        this.setState({
            selectedAlbums: {}
        })
    }

    play() {
        audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
        audio.load();
        audio.play();
    }

    render() {
        return (  
            <div id="main" className="container-fluid">

                <Sidebar reset={this.reset}/>  

                {
                    Object.keys(this.state.selectedAlbums).length ?
                    <SingleAlbum singleAlbum={this.state.selectedAlbums}/> : 
                    <Albums album={this.state.albums} handleClick={this.handleClick}/> 
                }
               
                
                <Footer/>
            </div>
        )
    }; 
}

export default Main;