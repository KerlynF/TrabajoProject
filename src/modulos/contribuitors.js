import React, {useEffect, useState} from "react";
import CardContribuitor from "./CardContribuitors";
import '../Css/cardRepo.css';

const Contribuitors = ({data}) => {

    const [contribuitors, setContribuitors] = useState([]);

    useEffect(() => {
        const getContribuitorsInfo = async () => {
            const infoContribuitors = await fetch(`${data}?per_page=10`);
            const infoContribuitorsJson = await infoContribuitors.json();
            setContribuitors(infoContribuitorsJson);
            console.log(infoContribuitorsJson);
        }
        getContribuitorsInfo();
    }, [])
    return(
        <section className="main-container">
            <div className="cards-container">
                {contribuitors ? ( contribuitors.map((contribuitorElement) => {
                     return(
                        
                        <CardContribuitor 
                        urlImage={contribuitorElement.avatar_url}
                        userNameContribuitor={contribuitorElement.login}
                        githubProfile={contribuitorElement.html_element}
                        numberContributions={contribuitorElement.contributions}
                        />
                    
                    );
                })
                   
                ) : (<p>Loading</p>)}
            </div>
        </section>
    );
}

export default Contribuitors;