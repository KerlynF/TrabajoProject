

const Datos = {
    api:'https://api.github.com',
    
   }

const GetInfoRep = async (API) => {

    const queryE = `per_page=${API.number}&q=` + encodeURIComponent(API.api);
    const response = await fetch(`${Datos.api}/search/repositories?${queryE}`);
    const answeJson = await response.json();

    return answeJson;
}

export default GetInfoRep;