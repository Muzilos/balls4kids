import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'
import Amplify from 'aws-amplify';
import config from './aws-exports.js'

Amplify.configure(config);
ReactDOM.render
    (<App />, 
    document.getElementById('root')
)
