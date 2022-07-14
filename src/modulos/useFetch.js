


const FetchData = async (request) => {

    const requestedData = await fetch(`${request.request}?per_page=${request.perpage}`);
    const requestedDataJson = await requestedData.json();
    console.log(requestedDataJson);

    return requestedDataJson;
}

export default FetchData;