import React from 'react'
import Container from './Container';

function Documentacao(props) {
    return <>
        <section>
            <Container titulo="Criar projeto" descricao="Criar um projeto com vite" codigo="npm create vite@latest minha-documentacao-react

cd minha-documentacao-react
npm install
npm run dev" />
        </section>

        {/* Componentes */}
        <section>
            <Container titulo="Componentes" descricao="Criar um componente" codigo="
           import React from 'react'

           function Nome(props){
              return <>

              </>
           }

           export default Nome;
          " />
        </section>

        {/* Props */}
        <section>
            <Container titulo="Props" descricao="Parametros de um componente. Propriedades" codigo="
           ...
           function Nome(props){
           ... " />
        </section>

        {/* Expressions */}
        <section>
            <Container titulo="Expressions" descricao="Expressões Javascript no Html" codigo="
           import React from 'react'

           function Nome(props){
              return <>
                  {Expression}
              </>
           }

           export default Nome;
          " />
        </section>

        {/* Statement */}
        <section>
            <Container titulo="Statements" descricao="Loops ou condições" codigo="
           import React from 'react'

           function Nome(props){
              const frutas = props.frutas;
    const itemLista = frutas.map((item) => <li>{item}</li>);
              return <>
                  <ul>
            {
                itemLista
            }
        </ul>
              </>
           }

           export default Nome;
          " />
        </section>


        {/* Condicionais */}
        <section>
            <Container titulo="Renderização Condicional" descricao="Renderizar somente se atender uma condição" codigo="
           import React from 'react'

           function Nome(props){
              return <>
                  {props.aluno ? <>
            <h1>É Aluno(a)!</h1>
            <img src='https://placehold.co/400' alt='imagem' />
        </> : <h1>Não é aluno(a)!</h1>}
              </>
           }

           export default Nome;
          " />
        </section>

        {/* Estados */}
        <section>
            <Container titulo="Estados" descricao="Gerenciar Estados - useState()" codigo="
           import React, { useState } from 'react'

function Estados(props) {
    const [numero, setNumero] = useState(0);

    return <>
        <h1>Estados - Número: {numero}</h1>
        <button onClick={() => setNumero(numero + 1)}>Adicionar</button>
    </>
}

export default Estados;
          " />
        </section>

        {/* Efeito Colateral */}
        <section>
            <Container titulo="useEffect" descricao="Efeito colateral - useEffect()" codigo="
           import React, { useEffect, useState } from 'react'

function EfeitoColateral(props) {
    const [itens, setItens] = useState(false);

    useEffect(() => {
        /* Chamou a API
        Buscou os dados
        */
        const dados = ['carro', 'casa', 'livro']
        const itemLista = dados.map((item) => <li>{item}</li>)

        setItens(itemLista)
    })


    return <>
        <ul>
            {
                itens
            }
        </ul>
    </>
}

export default EfeitoColateral;
          " />
        </section>

        {/* Formularios */}
        <section>
            <Container titulo="Formularios" descricao="Manipulação do input" codigo="import React, { useState } from 'react'

function Formularios(props) {
    const [nome, setNome] = useState('')
    return <>
        <form>
            <label>
                Nome:
                <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
        </form>
        <h1>{nome}</h1>
    </>
}

export default Formularios;" />
        </section>

        {/* Eventos */}
        <section>
            <Container titulo="Eventos" descricao="Sintaxe dos eventos em react" codigo="
            onClick={}
            onChange={}
            ...
            " />
        </section>

        {/* rotas */}
        <section>
            <Container titulo="Rotas" descricao="npm install react-router-dom" codigo="import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DocumentacaoPage from './paginas/DocumentacaoPage'
import EstudosPage from './paginas/EstudosPage'

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/documentacao'>Documentação</Link>
          <br />
          <Link to='/estudos'>Estudos</Link>
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

export default Rotas" />
        </section>


    </>
}

export default Documentacao;