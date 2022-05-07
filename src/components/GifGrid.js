/* Colección de elementos que coincidan con la categoria de busqueda*/

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { useFetchGifs } from '../hooks/useFetchGifs'

//import { useEffect } from 'react';

export const GifGrid = ({category}) => {

    /* para renombrar una propiedad en una desestructuracion:
        {nombre_original: nombre_nuevo}
    */
    const {data:images,loading} = useFetchGifs(category);


    return (
    <>
        
        <h3>{category}</h3>
        {/* para ahorrarse el "null" de un operador ternario usar "&&"... 
        { loading ? <p>loading</p> : null } */}
        { loading && <p>loading</p> }
        
         
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
