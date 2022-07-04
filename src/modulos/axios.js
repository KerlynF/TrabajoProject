

const GetInfoRep = async (API) => {

    const queryE = 'per_page=6&q=' + encodeURIComponent(API.data);
    const response = await fetch(`${API.api}/search/repositories?${queryE}`);
    const answeJson = await response.json();

    return answeJson;
}

export default GetInfoRep;