const React = require('react');
const ReactDOM = require('react-dom');
const axios = require ('axios   ')

import Main from './Main.jsx';

// import axios from 'axios';

const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);

axios.get('api/albums')
  .then(toJson)
  .then(log)
  .catch(logError);


ReactDOM.render(<Main/>, document.getElementById("app"))

