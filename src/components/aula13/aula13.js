import List from "./list"

function Aula13() {

    const meusItens = ['React', 'Vue', 'Angular']

    return(
        <>
            <h1>Aula #13 - Renderização de listas</h1>
            <List itens={meusItens}/>
            <List itens={[]}/>
        </>
    )
}

export default Aula13