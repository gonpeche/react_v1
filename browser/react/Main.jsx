import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import Albums from './Albums.jsx'
import axios from 'axios';
import SingleAlbum from './SingleAlbum'

const audio = document.createElement('audio')

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            selectedAlbums: {},
            currentSong: {},
            isPlaying: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.reset = this.reset.bind(this)
        this.start = this.start.bind(this)
        this.currentSong = this.currentSong.bind(this)
        // this.isPlaying = this.isPlaying.bind(this)
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
            selectedAlbums: {},
            isPlayting: false
        })
    }

    start(song) {
        this.currentSong(song)
        audio.src = song.audioUrl;
        audio.load();
        audio.play();
        this.state.isPlaying = true
    }

    currentSong (song) {
        this.setState({
            currentSong: song.id
        })
    }

    stop(){
        audio.stop();
    }

    render() {
        return (  
            <div id="main" className="container-fluid">

                 <div className="col-xs-2">
                    <Sidebar reset={this.reset}/> 
                 </div> 

                {
                    Object.keys(this.state.selectedAlbums).length ?
                    <SingleAlbum currentSong={this.state.currentSong} play={this.start} singleAlbum={this.state.selectedAlbums}/> : 
                    <Albums play={this.start} album={this.state.albums} handleClick={this.handleClick}/> 
                }
               
                {
                    this.state.isPlaying ?
                    <Footer play={this.start}/> : null

                }

            </div>
        )
    }; 
}

export default Main;