import CardContribuitor from "./CardContribuitors";
import React, {useEffect, useState} from "react";
import '../Css/cardRepo.css';
import FetchData from "./useFetch";
import {useLocation} from 'react-router-dom';

const Contribuitors = () => {

    const [contribuitors, setContribuitors] = useState({
        data: [],
        buttonPressed: false,
        moreData: [],

    });
    const url = useLocation();
    console.log(url);
    const dataFecth = {
        request: url.state,
        perpage: '10'
    }
    useEffect(() => {
        const requestData = async () => {
            const requested = await FetchData(dataFecth);
            setContribuitors({
                ...contribuitors,
                data: requested
            });
        }   
        requestData();
    },[])

    const sendData = () =>{
        const fetchMoreData = async () => {
            dataFecth.request = url.state;
            dataFecth.perpage = '15';
            const requestedDataFetch = await FetchData(dataFecth);
            setContribuitors({
                ...contribuitors,
                moreData: requestedDataFetch,
                buttonPressed: true
            });
        }
        fetchMoreData();
    }
    return(
        <section className="main-container">
            <div className="cards-container">
                {contribuitors.buttonPressed ? null : ( contribuitors.data.map((contribuitorElement) => {
                     return(
                        
                        <CardContribuitor 
                        urlImage={contribuitorElement.avatar_url}
                        userNameContribuitor={contribuitorElement.login}
                        githubProfile={contribuitorElement.html_url}
                        numberContributions={contribuitorElement.contributions}
                        />
                    
                    );
                })
                   
                )}
                {contribuitors.buttonPressed ? contribuitors.moreData.map((element) => {
                        return(
                            <CardContribuitor
                            urlImage={element.avatar_url}
                            userNameContribuitor={element.login}
                            githubProfile={element.html_url}
                            numberContributions={element.contributions}
                            />
                        );

                    }
                ) : (<p> </p>)}
            </div>
            <button onClick={sendData} className="button-fetch-more" type="submit">Load more</button>
        </section>
    );
}

export default Contribuitors;