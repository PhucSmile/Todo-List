import {LIST_ADD, LIST_REMOVE, LIST_ADD_DONE, LIST_UN_DONE} from '../Constants/listConstants'

export const listReducer =(state = {todoList: [], repeat: false}, action) => {
    switch (action.type) {
        case LIST_ADD:
            const newList = action.payload
            const checkName = state.todoList.find(t => t.name === action.payload.name);
            if(!checkName) {
                return {
                    ...state,
                    repeat: false,
                    todoList: [...state.todoList, newList]
                }
            } else {
                return {
                    ...state,
                    repeat: true,
                }
            }
        case LIST_REMOVE:
            return {
                ...state,
                todoList: state.todoList.filter(t => t.name !== action.payload.name),
            }

        case LIST_ADD_DONE:
            const exitsNote = state.todoList.find(t => t.name === action.payload.name)
            return {
                ...state,
                todoList: state.todoList.map(t => t.name === exitsNote.name ? action.payload : t)
            } 

            case LIST_UN_DONE:
                const unCompleteNote = state.todoList.find(t => t.name === action.payload.name) 
                return {
                    ...state,
                    todoList: state.todoList.map(t => t.name === unCompleteNote.name ? action.payload : t)
                }     
        default:
            return state    
    }
}