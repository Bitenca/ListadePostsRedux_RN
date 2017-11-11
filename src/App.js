import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Router from './Router';

//high order component: Provider

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducers); // create app state

const App = () => (
        <Provider store={store} >
            <Router />
        </Provider>
    );

export default App;
