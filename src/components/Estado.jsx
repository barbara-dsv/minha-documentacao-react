import { useState } from "react"

export function Estado  () {
    const [numero,setNumero] = useState(0)

    function handleClick  () {
        setNumero(numero + 1)
    }
    return(
    <>
    <h1>Estado - {numero}</h1>
    <button onClick={handleClick}>Adicionar </button>
    </>
    )
}