


const FetchData = async (request) => {

    const requestedData = await fetch(`${request}?per_page=10`);
    const requestedDataJson = await requestedData.json();
    console.log(requestedDataJson);

    return requestedDataJson;
}

export default FetchData;