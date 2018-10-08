import React, { Component } from 'react';

class SingleAlbum extends Component {
    render () {
        return (
            <div className="col-xs-10">
                <div className="album">
                    <div>
                        <h3>{this.props.singleAlbum.name}</h3>
                        <img src={this.props.singleAlbum.imageUrl} className="img-thumbnail" />
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
                                                <tr className={album.id === this.props.currentSong ? 'active' : ''} key={album.id}>
                                                    <td>
                                                 
                                                        <button onClick={() => {
                                                            this.props.play(album);
                                                        }} className="btn btn-default btn-xs">

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
            </div>
        )
    }
}

export default SingleAlbum;