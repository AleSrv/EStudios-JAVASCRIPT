// AGREGAMOS en package.json TYPE:MODULE PARA PODER IMPORTAR/EXPORTAR
// INSTALAR NPM AXIOS PARA HACER LLAMADAS A SERVICIOS EXTERNOS : npm i axios

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    console.log("Success!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    console.log("ERROR!!!")
    console.log(error);
  })