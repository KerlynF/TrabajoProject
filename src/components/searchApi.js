import React, { useEffect, useState } from "react";
import CardRepo from "../modulos/cardRepo.jsx";
import GetInfoRep from "../modulos/axios";
import '../Css/cardRepo.css';



const ContainerRepo = ({Data}) => {


  const dataSend = {
    api: Data,
    number: '6',
  }
  
  const [data, setData] = useState({
      data: {},
  });
  useEffect(() => {
      const getInfo = async () => {
      const infoApi = await GetInfoRep(dataSend);
      console.log(infoApi);
      setData({
        ...data,
        data: infoApi
      });
      
    }
    getInfo();
    
  }, [])

  const manageClick = () => {
      dataSend.number = '11';
      const getMoreInfo = async () =>{
          const newInfo = await GetInfoRep(dataSend);
          setData({
            ...data,
            data: newInfo
          })
      };

      getMoreInfo();
  }

  return (
    <section className="main-container-cards">
      <div className="cards-container">

        
        {data.data.items ? (  
          data.data.items.map((element) => {
            
            return(
              <CardRepo repoName={element.name}
                repoLenguage={`Language: ${element.language}`}
                repoDescription={element.description}
                repoLink={element.html_url}
                repoStars={`Stars: ${element.stargazers_count}`}
                repoOpenIssues={`Issues: ${element.open_issues_count}`}
                contribuitors={'/contribuitors'}
                nameCont={'Top Contribuitors'}
                key={element.id}
                pageContribuitors={element.contributors_url}
                
              />
              
            )
          })
          
        ) : (<p>Loading</p>)}
        
      </div>
      <button onClick={manageClick} type='submit' className="button-fetch-more">Load More</button>
    </section>
  );
}

export default ContainerRepo;