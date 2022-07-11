import React, { useEffect, useState } from "react";
import CardRepo from "../modulos/cardRepo.jsx";
import GetInfoRep from "../modulos/axios";
import '../Css/cardRepo.css';



const ContainerRepo = ({Data}) => {

  
  const [data, setData] = useState({});
  useEffect(() => {
      const getInfo = async () => {
      const infoApi = await GetInfoRep(Data);
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
                contribuitors={'http://localhost:3000/contribuitors'}
                nameCont={'Top Contribuitors'}
              />
            )
          })
          
        ) : (<p>Loading</p>)}
      </div>
    </section>
  );
}

export default ContainerRepo;