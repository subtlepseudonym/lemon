import React, { Component } from 'react';
import M from 'materialize-css';

import './app.css';

class App extends Component {
  componentDidMount() {
    var sidebars = document.querySelector('.sidenav');
    M.Sidenav.init(sidebars, null);
  }

  render() {
    return (
      <div className="body">
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li><a className="sidenav-close" href="#!">First Sidebar Link</a></li>
          <li><a className="sidenav-close" href="#!">Second Sidebar Link</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <main>
          <p>
            Now we've got Materialize CSS working!
          </p>
        </main>
      </div>
    );
  }
}

export default App;
