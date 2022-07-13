import CardContribuitor from "./CardContribuitors";
import React, {useEffect, useState} from "react";
import '../Css/cardRepo.css';
import FetchData from "./useFetch";
import {useLocation} from 'react-router-dom';

const Contribuitors = () => {

    const [contribuitors, setContribuitors] = useState([]);
    const url = useLocation();
    console.log(url);
    useEffect(() => {
        const requestData = async () => {
            const requested = await FetchData(url.state);
            setContribuitors(requested);
        }   
        requestData();
    },[])
    
    return(
        <section className="main-container">
            <div className="cards-container">
                {contribuitors ? ( contribuitors.map((contribuitorElement) => {
                     return(
                        
                        <CardContribuitor 
                        urlImage={contribuitorElement.avatar_url}
                        userNameContribuitor={contribuitorElement.login}
                        githubProfile={contribuitorElement.html_url}
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