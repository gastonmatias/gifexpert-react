/* funcion asincronica qe retorna una promesa,
la promise contiene un array de gifs desde una api
*/

export const getGifs  = async(category) => {
    /* encodeURI:
    sirve por si la busqueda en el input contiene espacios en blanco
    */
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=slcCt5zmjE1oH5sXiLAK3UCH2IqPvX7i`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img) => {
        /* para capturar solo las propiedades de interes de la api */
        return{
            id: img.id,
            title: img.title,
            /* el "?" es para indicar que 
            "si vienen las imagenes, entonces lo utilice" */
            url: img.images?.downsized_medium.url

        }
    })
    
    /*  como es fx async, NO retorna derechamente un array de gifs, sino que
    retorna una PROMESA que resuelva el array.
    para capturar el array, manejarlo con .then!
    */
    return gifs;
}