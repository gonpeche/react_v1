import React, {Component} from 'React';

class Albums extends Component {
    render () {
        return (
        
            <div className="col-xs-10">
            <div className="albums">
                <h3>Albums</h3>
                <div className="row">
                {
                    this.props.album.map(function (album) {
                        return (
                            <div key={album.id} className="col-xs-4">
                                    <a className="thumbnail" href="#">
                                        <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
                                        <div className="caption">
                                            <h5>
                                                <span>{album.name}</span>
                                            </h5>
                                            <small>{album.songs.length}</small>
                                        </div>
                                    </a>
                            </div>
                        ) 
                    })
                }
                </div>
            </div>
        </div>

        )
    }
}

export default Albums;

