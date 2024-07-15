import './Carro.css'
const Carro = ({nome, marca, imagem, corDeFundo}) => {
    return (
        <div className='carros'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
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