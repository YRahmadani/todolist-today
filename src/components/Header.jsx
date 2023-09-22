import owlbook from "../assets/owlbook.png"
import { useContext } from "react"
import { AppContext } from "../App"

const Header = () => {
    const app = useContext(AppContext)
    return (
        <header>
            <div className="flex sm:flex-row xs:flex-col xs:items-center gap-5 items-center justify-center">
                <img src={owlbook} className="xs:w-[75px] xl:w-[85px]"/>
                <h1 className="font-quicksand text-white font-bold text-3xl">
                    #todo List Today
                </h1>
            </div>
            <p className="font-quicksand text-center xl:text-lg font-medium text-white mt-5 mb-7">
                {app.state.todos.length === 0 ? "Time to add some tasks and kickstart the day!" : app.state.todos.length === 1 ? "Awesome start! How about adding a few more?🙇🏻‍♀️" : "Noice! Let's keep the list poppin' with more tasks 💯📝"}
            </p>
        </header>
    )
}

export default Header