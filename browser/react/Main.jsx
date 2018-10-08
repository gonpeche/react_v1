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
            albums: []
        }
    }

    componentDidMount() {
        axios.get('/api/albums')
        .then( response => this.setState({albums: response.data})
        )
        .catch( e => console.log(e))
    }

    render() {
        return (  
            <div>
                <Sidebar/>
                <Albums album={this.state.albums}/>
                <SingleAlbums/>
                <Footer/>
             </div>
        )
    }; 
}

export default Main;