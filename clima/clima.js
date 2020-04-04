const axios = require('axios');

const getClima = async( lat, lng ) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c4aaca9ba1dfaedc81eea6a4c232fd22&units=metric`)

  return resp.data.main.temp;

}


module.exports = {
  getClima
}
