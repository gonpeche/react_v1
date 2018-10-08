var React = require('react');

const Sidebar = function(props) {
  
    return <div className="col-xs-2">
            <sidebar>
              <img src="juke.svg" className="logo" />
              <section>
                <h4 className="menu-item active">
                  <a onClick={() => props.reset()} href="#">ALBUMS</a>
                </h4>
              </section>
            </sidebar>
            </div>
    
};

export default Sidebar