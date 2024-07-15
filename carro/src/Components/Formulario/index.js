import Botao from '../Botao';
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

const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido')
}
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o Card para Realizar o Cadastro de Carro</h2>
                <CampoTexto obrigatorio={true} label="nome"  placeholder="Digite Nome do Carro"/>
                <CampoTexto obrigatorio={true}  label="Cor"  placeholder="Digite Cor do Carro"/>
                <CampoTexto obrigatorio={true}  label="Ano"  placeholder="Digite Ano do Carro"/>
                <CampoTexto label="Imagem"  placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true}  itens={time} />
                <Botao>
                     Cadastrar Carro
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;