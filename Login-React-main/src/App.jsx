import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {

  const [datos, setDatos] = useState ('');

  const login = (dato) => {
    setDatos([...datos, dato])
  } 

  return (
    <div>
      
      <Header />

      <Main login={login} />
    
    </div>
  )
}

export default App