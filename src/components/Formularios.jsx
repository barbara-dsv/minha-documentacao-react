import React, { useState } from 'react'

function Formularios(props) {
    const [nome, setNome] = useState('')
    return <>
        <form>
            <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
        </form>
        <h1>{nome}</h1>
    </>
}

export default Formularios;