import {LIST_ADD, LIST_REMOVE, LIST_ADD_DONE, LIST_UN_DONE} from '../Constants/listConstants'

export const addList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ADD,
        payload: {
            name: name,
            complete: false,
        }
    })
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
}

export const removeList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_REMOVE,
        payload: {
            name: name,
          
        }
    })
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
}

export const addDone = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ADD_DONE,
        payload: {
            name: name,
            complete: true
          
        }
    })
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
}

export const addUnDone = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_UN_DONE,
        payload: {
            name: name,
            complete: false
          
        }
    })
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
}
