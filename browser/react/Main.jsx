var React = require('react');


class Main extends React.Component {
    constructor() {
        super()
        this.state = {date: 'crack'}
    }
    
    render() {
        return (
        <div id="main" className="container-fluid">
         <h1>Hello world!</h1>
         <h2>Sos un tremendo {this.state.date}</h2>
        </div>
        )
    }; 
}

export default Main;

