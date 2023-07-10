import Button from './button'

function evento(){

    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento(){
        console.log(`Ativando segundo evento`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default evento