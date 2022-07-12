import { render } from "@testing-library/react";
import React from "react";
import '../Css/cardRepo.css';
import Contribuitors from "./contribuitors";
import {Link} from 'react-router-dom';

const CardRepo = ({ repoName, repoLenguage, repoDescription, repoLink, repoStars, repoOpenIssues, nameCont, pageContribuitors}) => {
  
 

  return (
    <div className="product-card">  
      <div className="product-info">
        <div>
          <p> <a href={repoLink}>{repoName}</a></p>
          <p>{repoLenguage}</p>
          <p>{repoDescription}</p>
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