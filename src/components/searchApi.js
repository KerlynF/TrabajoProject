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
          
          data.items.map((element) => {
            return(
            <CardRepo repoName={element.name}
              repoLenguage={`Language: ${element.language}`}
              repoDescription={element.description}
              repoLink={element.html_url}
              repoStars={`Stars: ${element.stargazers_count}`}
              repoOpenIssues={`Issues: ${element.open_issues_count}`} 
            />
            )
          })
          
        ) : (<p>Loading</p>)}
      </div>
    </section>
  );
}

export default ContainerRepo;