import Item from './item'

function list(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault"/>
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item />
            </ul>
        </>
    )
}

export default list