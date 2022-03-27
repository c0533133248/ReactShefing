
import { actions } from '../Action'


export const getListsData = ({ dispatch, getState }) => next => async (action) => {
  if (action.type === "GET_LISTS") {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      return res.json();
    }).then((response) => {
      dispatch( actions.setListsData(response))
    }).catch((err) => {
      alert("error!!", err)
    });
  }; 
  return next(action);
}

export const getPosts = ({ dispatch, getState }) => next => async (action) => {
  if (action.type === "GET_POSTS") {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      return res.json();
    }).then((response) => {
      dispatch( actions.setPosts(response))
    }).catch((err) => {
      alert("error!!", err)
    });
  }; 
  return next(action);
}


