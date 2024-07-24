import React from 'react'
import './App.css'
import Documentacao from './components/Documentacao'
import Formularios from './components/Formularios'




function App() {

  return (
    <>
      <header>
        <h1>Minha Documentação React</h1>
        <hr />
        <br />
      </header>
      <main>
        <Formularios />
        <Documentacao />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
