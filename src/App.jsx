import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {DocumentacaoPage} from './paginas/DocumentacaoPage'

import { EstadoPage } from './paginas/EstadoPage';
import { FormularioPage } from './paginas/FormularioPage';
import {EfeitoColateralPage} from './paginas/EfeitoColateralPage'

export function App() {

  return (

    <BrowserRouter>

    <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/documentacao">Documentação</Link>
    <br />
    <Link to="/estado">Estado</Link>
    <br />
    <Link to="/formulario">Formulario</Link>
    <br />
    <Link to="efeitoColateral">UseEffect</Link>
    </nav>


    <Routes>
      <Route path='/documentacao' element={<DocumentacaoPage/>}/>
      <Route path='/estado' element={<EstadoPage/>}/>
      <Route path='/formulario' element={<FormularioPage/>}/>
      <Route path='/efeitoColateral' element={<EfeitoColateralPage/>}/>
    </Routes>
    </BrowserRouter>

  )
}

