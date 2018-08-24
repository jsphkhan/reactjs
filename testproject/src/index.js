import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComponentTest from './ComponentTest';
import Test from './React16FeatureTest';
import {Class1, Class2} from './components/ModuleImportExportComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Class1 />, document.getElementById('root'));
registerServiceWorker();
