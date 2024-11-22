import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"

const App = () => {

  const [datos, setDatos] = useState('')

  const addCuenta = (dato) => {
      setDatos ([...datos, dato])
  }

  return(
    <div>

      <Header />

      <Main addCuenta={addCuenta} />

    </div>
  )
}

export default App