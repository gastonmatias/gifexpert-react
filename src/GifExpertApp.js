import React, { useState } from 'react'

// imp componente AddCategory
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

//FC
export const GifExpertApp = () => {

  //const categories = ['One Punch','Samurai X','Demon Slayer']
  const [categories, setCategories] = useState(['Samurai X'])

 /*  console.log(categories)
  console.log(setCategories) */
 /*  const handleAdd = () => {
    // 1ra forma
    //setCategories([...categories,'HunterXHunter'])
    
    // 2da forma
    setCategories((arr) => [...arr,'Shingeki'] )
  } */

  return (
    <>
        {/* titulo de la aplicacion */}
        <h2>GifExpertApp</h2>
        
        {/* Buscador filtrando busqueda como "categoria" */}
        {/*  al componente "AddCategory" se le puede pasar como propiedad una funcion
        en este caso "setCategories", se manda como referencia*/}
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* lista con resultado de la busqueda */}
        <ol>
          {categories.map((category) => 
             <GifGrid 
                key={category}
                category={category}>

              </GifGrid>
          )}
        </ol>
        
    </>
    
  )
}


//export default GifExpertApp;