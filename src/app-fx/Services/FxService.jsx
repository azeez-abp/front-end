//import React from 'react'
import axios from 'axios';
export default async function FxService() {
 // const  data  = await axios.get('https://api.exchangerate.host/latest');

  const data_   = await axios({
    method: 'get',
    url: 'https://api.exchangerate.host/latest',
    responseType: 'stream'
  })

  return data_.json();
    // .then(function (response) {
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    // })


}
