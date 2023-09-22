import { useContext, useState } from "react"
import { AppContext } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons"

const Todolist = () => {
    const app = useContext(AppContext)
    const [idEdit, setIdEdit] = useState(null)
    const [editInputVal, setEditInputVal] = useState("")
    const filteredTodo = app.state.todos.filter((todo) => {
        if(app.state.activePage === "active") {
            return !todo.isCompleted 
        } else if(app.state.activePage === "completed") {
            return todo.isCompleted 
        } else {
            return true
        }
    })
    const handleEditing = (idx) => {
        setEditInputVal(app.state.todos.find(todo => todo.id === idx).name)
        setIdEdit(idx)
    }
    const handleUpdate = () => {
        const updateTodo = app.state.todos.map(todo => todo.id === idEdit ? { ...todo, name: editInputVal } : todo)
        app.state.todos = updateTodo
        setIdEdit(null)
        setEditInputVal("")
    }

    return (
        <ul className="py-6 sm:w-[50%] xs:w-[80%]">
            {filteredTodo.map((todo, idx) => (
                <li key={todo.id} className={`flex items-center relative ${idx === app.state.todos.length - 1 ? "mb-0" : "mb-3"}`}>
                    <div className={`w-5 h-5 border-2 border-white rounded-md cursor-pointer relative ${todo.id === idEdit ? "invisible" : "visible"}`} 
                    onClick={() => app.dispatch({type:"SET_COMPLETED", idComplete: todo.id})} >   
                        {todo.isCompleted && <FontAwesomeIcon icon={faCheck}
                        className="text-white -translate-y-1/2 top-1/2 absolute left-1/2 -translate-x-1/2"/>}
                    </div>
                    {todo.id === idEdit ? (
                    <>
                        <input type="text" 
                        onKeyDown={(e) => {if(e.key === "Enter") {
                            handleUpdate()
                        }}}
                        onChange={(e) => setEditInputVal(e.target.value)}
                        value={editInputVal} 
                        className="bg-white bg-opacity-10 py-[2px] ml-5 px-2 w-[70%] rounded-lg outline-none text-white font-quicksand"/>
                        <FontAwesomeIcon icon={faCheck}
                        onClick={handleUpdate}
                        className="text-white absolute right-0 text-lg cursor-pointer top-1/2 -translate-y-1/2"/>
                    </>
                    ) : (
                    <>
                        <p className={`text-white font-quicksand ml-5 ${todo.isCompleted && "line-through opacity-50"}`}>{todo.name}</p>
                        <div className="absolute flex gap-4 right-0">
                            {app.state.activePage !== "completed" && <FontAwesomeIcon icon={faPenToSquare} 
                            onClick={() => handleEditing(todo.id)} 
                            className="text-white cursor-pointer"/>}
                            <FontAwesomeIcon icon={faTrashCan}
                            onClick={() => app.dispatch({type:"DELETE_TODO", payload:todo.id})} 
                            className="text-white cursor-pointer"/>
                        </div>
                    </>
                    )}
                </li>
            ))}
            {app.state.activePage === "completed" && app.state.todos.filter(todo => todo.isCompleted === true).length >= 2 ? <div className="w-full flex justify-end">
                <button
                onClick={() => app.dispatch({type:"DELETE_ALL"})}
                className="bg-red-700 active:bg-red-800 mt-3 px-3 py-2 font-quicksand text-white shadow-lg rounded-md">
                    Delete All
                </button>
            </div>: null}
        </ul>
    )
}

export default Todolist