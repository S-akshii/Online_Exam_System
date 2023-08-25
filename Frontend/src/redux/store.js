import {configureStore} from '@reduxjs/toolkit'
import { Reducer } from "./reducer";

//imports for persistance  
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,Reducer)

export const store = configureStore({
    reducer : persistedReducer
});

