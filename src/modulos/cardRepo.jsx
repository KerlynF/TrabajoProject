import React from "react";
import '../Css/cardRepo.css';


const CardRepo = ({ repoName, repoLenguage, repoDescription, repoLink, repoStars, repoOpenIssues, contribuitors, nameCont}) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <div>
          <p> <a href={repoLink}>{repoName}</a></p>
          <p>{repoLenguage}</p>
          <p>{repoDescription}</p>
          <p>{repoStars}</p>
          <p>{repoOpenIssues}</p>
          <p><a href={contribuitors}>{nameCont}</a></p>
        </div>
      </div>
    </div>
  );
}

export default CardRepo;