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

    play(song) {
        audio.src = song;
        audio.load();
        audio.play();
    }

    render() {
        return (  
            <div id="main" className="container-fluid">

                 <div className="col-xs-2">
                    <Sidebar reset={this.reset}/> 
                 </div> 

                {
                    Object.keys(this.state.selectedAlbums).length ?
                    <SingleAlbum play={this.play} singleAlbum={this.state.selectedAlbums}/> : 
                    <Albums play={this.play} album={this.state.albums} handleClick={this.handleClick}/> 
                }
               
                <Footer play={this.play}/>
            </div>
        )
    }; 
}

export default Main;