import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import { BrowserRouter } from 'react-router-dom';

import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

