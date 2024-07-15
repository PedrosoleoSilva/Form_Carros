import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitar =(evento) =>{
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitar} required={props.required} value={props.valor}>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;