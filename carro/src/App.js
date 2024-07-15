import { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";
import Marca from "./Components/Marca";


function App() {
  const [carros, setCarros] = useState([]) //array de carros

  const marcas = [
    {
      nome: 'Fiat',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Chevrolet',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Volkswagen',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Toyota',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Hyundai',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Ford',
       corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Renault',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
];


  const aoNovoCarroAdicionado = (carro) =>{
    console.log(carro)
    setCarros([...carros, carro]) //pego carros ja cadastrado e cadastro o novo nessa lista
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario  carros={marcas.map(marca => marca.nome)} aoCarroCadastrado={carro => aoNovoCarroAdicionado(carro)}/> 
      {marcas.map(marca => <Marca key={marca.nome} 
        nome={marca.nome} 
        corPrimaria={marca.corPrimaria} 
        corSecundaria={marca.corSecundaria}
        carros={carros.filter(carro => carro.marca === marca.nome)}
      />)} 
      
    
    </div>
  );
}

export default App;
