import { useState } from "react"
import SeuNome from "./seuNome"
import Saudacao from "./saudacao"

function Aula14() {

    const [nome, setNome] = useState()

    return(
        <>
        <h1>Aula #14 - State Lift</h1>
        <SeuNome setNome={setNome} />
        <Saudacao nome={nome}/>
        </>
    )
}

export default Aula14