import { v4 as uuidv4 } from "uuid"

export const initialState = {
    activePage: "all",
    todos: [],
    todoInput: "",
    isEditing: false,
    idEdit: null,
    editInputVal: ""
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case "SET_PAGE": return { ... state,
            activePage: action.payload ?? state.activePage
        }
        case "NEW_TODO": return { ... state,
            todoInput: action.payload,
        }
        case "ADD_TODO": 
        if(state.todoInput !== "") {
            return { ... state, 
            todos: [
                ... state.todos, { id: uuidv4(), name: state.todoInput, isCompleted: false }
            ],
            todoInput: ""
        }}
        case "SET_COMPLETED": return { ... state, 
            todos: state.todos.map(todo => {
                if(todo.id === action.idComplete) {
                    return { ... todo, isCompleted: !todo.isCompleted }
                } return todo
            })
        }
        case "DELETE_TODO": return { ... state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        case "DELETE_ALL": return { ... state,
            todos: state.todos.filter(todo => {
                if(state.activePage === "active") {
                    return todo.isCompleted
                } else if(state.activePage === "completed") {
                    return !todo.isCompleted
                } else {
                    return true
                }
            })
        }
        case "EDIT_TODO": return { ... state, 
            editInputVal: state.todos.find(todo => todo.id === state.idEdit),
            isEditing: true
        }
        default: return state
    }
}

export default reducer