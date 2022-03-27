import { createStore, applyMiddleware } from 'redux';
import reducer from './Index';
import { composeWithDevTools } from 'redux-devtools-extension';
import {getListsData,getPosts} from '../redux/middleware/ListsMiddleWare'

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware
            (
                getListsData,getPosts       
            )
    )
)
export default store;