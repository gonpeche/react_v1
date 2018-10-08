import React, { Component } from 'react';

class SingleAlbum extends Component {
    render () {
        return (
            <div className="album">
                <div>
                    <h3>{this.props.singleAlbum.name}</h3>
                    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
                </div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Artists</th>
                        <th>Genre</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            this.props.singleAlbum.songs && this.props.singleAlbum.songs.map( 
                                album => {
                                return (
                                            <tr key={album.id}>
                                                <td>
                                                    <button className="btn btn-default btn-xs">
                                                        <span className="glyphicon glyphicon-play"></span>
                                                    </button>
                                                </td>
                                                <td>{album.name}</td>
                                                <td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
                                                <td>{album.genre}</td>
                                            </tr>
                                        )
                                })
                        }
              
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SingleAlbum;