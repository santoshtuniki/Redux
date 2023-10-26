import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { Provider, useStore } from 'react-redux';
import { legacy_createStore} from "redux"
import rootReducer from "./services/reducers/index";

const store = legacy_createStore(rootReducer);
console.log("store info", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
