// Requerimos axios que es un metodo request pero para Promesas
const axios = require('axios');

getLugarLatLng = async ( dir ) => {

  // Configuramos la direccion a caracteres especiales
  const encodeUrl = encodeURI( dir );

  // Creamos la instancia y usamos encodeUlr
  const instance = axios.create({
    baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: {'X-RapidAPI-Key': '390ec97b56msh88b36b801a25bc5p1c4064jsnfc2fc6178821' }
  });

  // Ejecutamos la instancia
  const resp = await instance.get()

  if( resp.data.Results.length === 0){
    throw new Error (`No hay resultado para ${ dir }`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }

}


module.exports = {
  getLugarLatLng
}
