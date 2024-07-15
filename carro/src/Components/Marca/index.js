import Carro from '../Carro';
import './Marca.css'

const Marca = (props) => {

    const secundaria = {backgroundColor: props.corSecundaria}
    const  primaria = {borderColor: props.corPrimaria}

    return (
     (props.carros.length > 0) ? <section className='marca' style={secundaria}>
            <h3 style={primaria}>{props.nome}</h3>
            <div className='marcas'>
                {props.carros.map(carro => <Carro  corDeFundo={props.corPrimaria} key={carro.nome}  nome={carro.nome}  marca={carro.marca} imagem={carro.imagem}/>)}
            </div>
        </section>
        : ''
    );
}

export default Marca;