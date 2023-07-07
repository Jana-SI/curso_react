import Item from './item'

function list(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default list