import React, { useEffect, useState } from "react";
import CardRepo from "../modulos/cardRepo.jsx";
import GetInfoRep from "../modulos/axios";
import '../Css/cardRepo.css';



const numOfRepoPerPage = 6;


const ContainerRepo = ({Data}) => {

  const Datos = {
    api:'https://api.github.com',
    data: Data,
   }
  const [data, setData] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      const infoApi = await GetInfoRep(Datos);
      console.log(infoApi);
      setData(infoApi);
    }
    getInfo();
  }, [])

  return (
    <section className="main-container">
      <div className="cards-container">
        {data.items ? (
        <CardRepo repoName={data.items[0].name}
          repoLenguage={`Language: ${data.items[0].language}`}
          repoDescription={data.items[0].description}
          repoLink={data.items[0].html_url}
          repoStars={`Stars: ${data.items[0].stargazers_count}`}
          repoOpenIssues={`Issues: ${data.items[0].open_issues_count}`} />
        ) : (<p>Loading</p>)}
        {/* {console.log(data.items[0].name)} */}
      </div>
    </section>
  );
}

export default ContainerRepo;