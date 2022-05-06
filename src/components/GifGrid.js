/* Colección de elementos que coincidan con la categoria de busqueda*/

import React, {useEffect,useState} from 'react'
//import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
//import { useEffect } from 'react';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
      getGifs(category)
        .then(setImages)
    
    }, [category])
    

    return (
    <>
        
        <h3>{category}</h3>
        {/* {loading ? 'Cargando...': 'Data cargada'} */}
        <div className='card-grid' >
        {/*  insertar cada imagen de la api como una <li> */}
        {
            images.map((img) => 
            /* aqui el mismo array de img obtenido desde la api, es pasado como "props", por tanto
            cada propiedad de "data" (origen del array desde api) 
            sera una propiedad "props" del componente GifGridItem */
                <GifGridItem 
                    key={img.id}
                    {...img }
                />
            ) 
        }           
      

        </div>
    </>
  )
}
