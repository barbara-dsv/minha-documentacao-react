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


    </>
}

export default Documentacao;