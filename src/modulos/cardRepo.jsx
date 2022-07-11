import { render } from "@testing-library/react";
import React from "react";
import '../Css/cardRepo.css';
import Contribuitors from "./contribuitors";

const CardRepo = ({ repoName, repoLenguage, repoDescription, repoLink, repoStars, repoOpenIssues, contribuitors, nameCont}) => {
  
  const manageClickRepo = () =>
  {
     render(<Contribuitors data='https://api.github.com/repos/airbnb/javascript/contributors '/>)
  }

  return (
    <div className="product-card">  
      <div className="product-info">
        <div>
          <p> <a href={repoLink}>{repoName}</a></p>
          <p>{repoLenguage}</p>
          <p>{repoDescription}</p>
          <p>{repoStars}</p>
          <p>{repoOpenIssues}</p>
          <p onClick={manageClickRepo}>{nameCont}</p>
        </div>
      </div>
    </div>
  );
}

export default CardRepo;