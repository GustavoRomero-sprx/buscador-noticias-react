import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios'

function App() {

  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect( () => {

    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5c791ef5e88445c1ab2f9f40d37f4834`
      const respuesta = await axios.get(url)

      guardarNoticias(respuesta.data.articles)
      


    }
    consultarApi()
  },[categoria])

  return (
      <Fragment>
        <Header
        titulo='Buscador de Noticias'
        />

        <div className='container white'>
            <Formulario 
            guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
      </Fragment>
  );
}

export default App;
