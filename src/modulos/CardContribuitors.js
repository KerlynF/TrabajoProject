import React from "react";
import '../Css/cardContribuitors.css';


const CardContribuitor = ({urlImage, userNameContribuitor, githubProfile, numberContributions}) => 
{
    return(
        <div className="contribuitor-card">
            <figure className="contribuitor-image">
                <img src={urlImage}></img>
                <figcaption>Github avatar contribuitor</figcaption>
            </figure>
            <div className="contribuitor-info">
                <p><a href={githubProfile}>{userNameContribuitor}</a></p>
                <p>{`${numberContributions} Contributions`}</p>
            </div>
        </div>
    );

}

export default CardContribuitor;