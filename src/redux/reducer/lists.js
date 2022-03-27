import { produce } from 'immer'
import createReducer from '../ReducerUtils'

const initialState = {
    listData: undefined,
    posts:undefined,
    selectedUser:undefined
}

const listsFunctions = {

    setListsData(state, action) {
        state.listData = action.payload
    },
    setPosts(state, action) {
        state.posts = action.payload
    },
    setUser(state, action) {
        state.selectedUser = action.payload
    },
    setNewPost(state, action) {
        let newPost=action.payload
        let arr=[...state.posts,newPost]
        state.posts = arr
    }

}
export default produce((state, action) => createReducer(state, action, listsFunctions), initialState);


