import React from "react";
import '../Css/cardContribuitors.css';


const CardContribuitor = ({ urlImage, userNameContribuitor, githubProfile, numberContributions }) => {
  return (
    <div className="contribuitor-card">
      <div className="contribuitor-image">
        <img src={urlImage} alt="Avatar contribuitor"></img>
      </div>
      <div className="contribuitorr-info">
        <p><a href={githubProfile}>{userNameContribuitor}</a></p>
        <p>{`${numberContributions} Contributions`}</p>
      </div>
    </div>
  );

}

export default CardContribuitor;