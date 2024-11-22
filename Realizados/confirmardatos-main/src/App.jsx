import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"

const App = () => {

  const [datos, setDatos] = useState ('')

  const addFaltantes = (dato) => {
      setDatos([...datos, dato]);
  }


  return (
    <div>

      <Header />

      <Main addFaltantes={addFaltantes} />

    </div>
  )

}

export default App