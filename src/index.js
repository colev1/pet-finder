import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const router = (
  <Provider store={ store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();