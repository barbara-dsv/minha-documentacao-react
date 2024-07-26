import { useState } from "react"

export function Formulario (){
    //para pegar o valor do input e mandar para a api é preciso de um estado 
    const [nome, setNome] = useState('')

    return(
        <>
        <form action="">
            <label htmlFor=""> 
                Nome
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
            </label>
        </form>
        <h1>{nome}</h1>
        </>
    )
}