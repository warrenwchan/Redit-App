import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { WeeksReducer, PostsReducer } from './reducer'
import ReduxThunk from 'redux-thunk';

const mockMiddleware = store => next => action => {
    console.log(store.getState())
    const done = next(action);
    console.log(store.getState())
    return done;
}

export default createStore (
    combineReducers({
        weeks: WeeksReducer,
        posts: PostsReducer

    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        reduxLogger,
        ReduxThunk
        ),
);
