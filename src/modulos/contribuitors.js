import React, {useEffect, useState} from "react";

import GetInfoRep from '../modulos/axios';
import '../Css/cardRepo.css';

const Contribuitors = ({data}) => {

    const [contribuitors, setContribuitors] = useState({});

    useEffect(() => {
        const getContribuitorsInfo = async () => {
            const infoContribuitors = await GetInfoRep(data);
            setContribuitors(infoContribuitors);
        }
        getContribuitorsInfo();
    }, [])
    return(
        <section className="main-container">
            <div className="cards-container">
                {contribuitors ? ( contribuitors.map((contribuitorElement) => {
                     return(
                        
                        <h1>Hola</h1>
                    
                    );
                })
                   
                ) : (<p>Loading</p>)}
            </div>
        </section>
    );
}

export default Contribuitors;