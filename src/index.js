import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import registerServiceWorker from './registerServiceWorker';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

const config = {
    apiKey: 'AIzaSyBF-SQwLBa6Vm-gWOc5NrqzsPC8INt70PA',
    projectId: 'dox-solutions-2018',
  };

ReactDOM.render(
    <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>, 
    document.getElementById('root'));

    registerServiceWorker();
