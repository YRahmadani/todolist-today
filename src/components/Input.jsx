import { useContext } from "react"
import { AppContext } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Input = () => {
    const app = useContext(AppContext)
    return (
        <div className="shadow-input py-4 px-6 rounded-3xl mt-4 sm:w-[65%] lg:w-[58%] xs:w-[95%] flex justify-between items-center">
            <input type="text"
            value={app.state.todoInput} 
            onKeyDown={(e) => {if(e.key === "Enter" && app.state.todoInput !== ""){
                e.preventDefault()
                app.dispatch({type:"ADD_TODO"})
            }}}
            onChange={(e) => app.dispatch({type:"NEW_TODO", payload:e.target.value})}
            placeholder="Add your tasks here..."
            className="bg-transparent w-[85%] xl:text-lg font-quicksand text-white outline-none" 
            />
            <FontAwesomeIcon 
            onClick={() => app.dispatch({type:"ADD_TODO"})}
            icon={faPlus} 
            className="text-white text-lg xl:text-xl cursor-pointer"/>
        </div>
    )
}

export default Input