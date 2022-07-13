import { render } from "@testing-library/react";
import React from "react";
import '../Css/cardRepo.css';
import Contribuitors from "./contribuitors";
import {Link} from 'react-router-dom';

const CardRepo = ({ repoName, repoLenguage, repoDescription, repoLink, repoStars, repoOpenIssues, nameCont, pageContribuitors}) => {
  
 

  return (
    <div className="product-card">  
      <div className="product-info">
        <div className="product-info-header">
          <p> <a href={repoLink}>{repoName}</a></p>
          <p>{repoLenguage}</p>
        </div>
       <div className="product-info-description">
          <p>{repoDescription}</p>
       </div>
       <div className="product-info-footer">
        <p>{repoStars}</p>
        <p>{repoOpenIssues}</p>
        <Link to={`/contribuitors`} 
            state={
                  pageContribuitors
          }>{nameCont}
        </Link>
       </div>
        
      </div>
    </div>
  );
}

export default CardRepo;