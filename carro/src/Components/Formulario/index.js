import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

const time = [
    'Fiat',
    'Chevrolet',
    'Volkswagen',
    'Toyota',
    'Hyundai',
    'Ford'
]
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha o Card para Realizar o Cadastro de Carro</h2>
                <CampoTexto label="nome"  placeholder="Digite Nome do Carro"/>
                <CampoTexto label="Cor"  placeholder="Digite Cor do Carro"/>
                <CampoTexto label="Ano"  placeholder="Digite Ano do Carro"/>
                <ListaSuspensa itens={time} />
            </form>
        </section>
    );
}

export default Formulario;