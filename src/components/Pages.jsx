import { useContext } from "react"
import { AppContext } from "../App"

const Pages = () => {
    const app = useContext(AppContext)
    return (
        <div className="flex font-bold justify-between font-quicksand text-white border-b border-gray-400 sm:w-[50%] xs:w-[95%]">
            <button className={`pb-3 xl:text-lg relative px-2 ${app.state.activePage === "all" && "after:absolute after:bg-white after:w-full after:h-1 after:rounded-t-full after:bottom-0 after:left-0"}`} 
            onClick={() => app.dispatch({type: "SET_PAGE", payload: "all"})}>
                All
            </button>

            <button className={`pb-3 xl:text-lg px-2 relative ${app.state.activePage === "active" && "after:absolute after:bg-white after:w-full after:h-1 after:rounded-t-full after:bottom-0 after:left-0"}`} 
            onClick={() => app.dispatch({type: "SET_PAGE", payload: "active"})}>
                Active
            </button>

            <button className={`pb-3 xl:text-lg px-2 relative ${app.state.activePage === "completed" && "after:absolute after:bg-white after:w-full after:h-1 after:rounded-t-full after:bottom-0 after:left-0"}`} 
            onClick={() => app.dispatch({type:"SET_PAGE", payload: "completed"})}>
                Completed
            </button>
        </div>
    )
}

export default Pages