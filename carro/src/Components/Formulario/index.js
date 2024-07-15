import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import {useState} from 'react'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cor, setCor] = useState('')
    const [ano, setAno] = useState('')
    const [imagem, setImagem] = useState('')
    const [marca, setMarca] = useState('')



const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoCarroCadastrado({
        nome, 
        cor,
        ano,
        imagem, 
        marca
    })
    setAno('')
    setCor('')
    setNome('')
    setImagem('')
}
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o Card para Realizar o Cadastro de Carro</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="nome"  
                    placeholder="Digite Nome do Carro"
                    valor={nome}
                    aoAlterado ={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cor"  
                    placeholder="Digite Cor do Carro"
                    valor={cor}
                    aoAlterado ={valor => setCor(valor)}
                 />
                <CampoTexto 
                    obrigatorio={true}  
                    label="Ano" 
                    placeholder="Digite Ano do Carro"
                    valor={ano}
                    aoAlterado ={valor => setAno(valor)}
                 />
                <CampoTexto
                    label="Imagem"  
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado ={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={props.carros}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />
                <Botao>
                     Cadastrar Carro
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;