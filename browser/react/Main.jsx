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
    
    render() {
        return (  
            <div id="main" className="container-fluid">

                <Sidebar/>  

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