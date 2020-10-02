import React,{useState} from 'react'

const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState]=useState(stateInicial)

   
    const SelectNoticias = () => (
        <select
            className='browser-default'
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map( opcion => (
                <option key={opcion.values} value={opcion.values}>{opcion.label}</option>
            ))}
        </select>
    
        
    )

    return [state,SelectNoticias,actualizarState]
}
export default useSelect;