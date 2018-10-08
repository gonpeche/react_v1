var React = require('react');

const Footer = function (props) {
    return <footer>
        <div className="pull-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          <button onClick={() => props.play()} className="btn btn-default">

          {
            console.log(this.state.isPlaying)
          }
            <span className="glyphicon glyphicon-play"></span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        </footer>
}

export default Footer
