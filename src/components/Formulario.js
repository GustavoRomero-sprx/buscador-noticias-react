import React from 'react'
import styles from './Formulario.module.css'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
    {values:'general', label:'General'},
    {values:'business', label:'Negocios'},
    {values:'entertainment', label:'Entretenimiento'},
    {values:'health', label:'Salud'},
    {values:'science', label:'Ciencia'},
    {values:'sports', label:'Deportes'},
    {values:'technology', label:'Tecnologia'},
    ] 
    
    const [categoria,SelectNoticias]=useSelect ('general',OPCIONES) 

    const buscarNoticia = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return(
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticia}>
                    <h2 className={styles.heading}>Encuentra Noticias por categorias</h2>

                    <SelectNoticias/>

                    <div className='input-field col s12'>
                        <input 
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;