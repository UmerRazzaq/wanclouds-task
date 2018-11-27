import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxReset from 'redux-reset';


export function saveToLocalStorage(state){
try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)

}catch(e)
{
console.log(e);

}
}

function loadFromLocalStorage(){

try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null)
        return undefined;
    return JSON.parse(serializedState);

}
catch(e)
{
    console.log(e);
    return undefined;    
}   
}

export const store = createStore(
    rootReducer,
    reduxReset()   
 )

store.subscribe(() => saveToLocalStorage(store.getState()));

