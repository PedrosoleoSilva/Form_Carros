import { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";


function App() {
  const [carros, setCarros] = useState([]) //array de carros

  const aoNovoCarroAdicionado = (carro) =>{
    console.log(carro)
    setCarros([...carros, carro]) //pego carros ja cadastrado e cadastro o novo nessa lista
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario  aoCarroCadastrado={carro => aoNovoCarroAdicionado(carro)}/>

    </div>
  );
}

export default App;
