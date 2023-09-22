import { createContext, useReducer } from "react"
import reducer, { initialState } from "./reducer/reducer"
import { Header, Pages, Input, Todolist } from "./components"

export const AppContext = createContext()

const App = () => {
  const [ state, dispatch ] = useReducer( reducer, initialState )
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <>
        <header className="md:w-1/2 xs:w-[95%] mx-auto flex justify-center pt-8">
          <Header/>
        </header>
        <main className="md:w-1/2 xs:w-[95%] mx-auto flex flex-col items-center justify-center">
          <Pages/>
          {state.activePage === "all" && <Input/>}
          <Todolist/>
        </main>
        <footer className="absolute bottom-4 right-1/2 translate-x-1/2">
          <p className="font-quicksand text-center text-white">created by <span className="font-bold">Geevanya</span> — devChallenges.io</p>
        </footer>
      </>
    </AppContext.Provider>
  )
}

export default App
