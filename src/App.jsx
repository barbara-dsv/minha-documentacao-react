import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DocumentacaoPage from './paginas/DocumentacaoPage'
import EstudosPage from './paginas/EstudosPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/documentacao">Documentação</Link>
          <br />
          <Link to="/estudos">Estudos</Link>
          <br />
        </nav>

        <Routes>
          <Route path='/documentacao' element={<DocumentacaoPage />} />
          <Route path='/estudos' element={<EstudosPage />} />
          <Route path='/' element={<EstudosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
