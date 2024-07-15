import './Carro.css'
const Carro = ({nome, marca, imagem}) => {
    return (
        <div className='carros'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{marca}</h5>
            </div>
        </div>
    );
}

export default Carro;