import { render } from "@testing-library/react";
import React, {Fragment, useState}from "react";
import ContainerRepo from "./searchApi";
import '../Css/cardRepo.css';

const SearchForm = () =>
{
  const [formData, setFormData] = useState({
    repoData: '',
    buttonPressed: false
  });

  const handleInputChanges = (event) => 
  {
     //console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    });
  }

  const sendForm = (event) => 
  {
    
    event.preventDefault();
    
    setFormData({
      ...formData,
      buttonPressed : true
    })
  }

  return(
    <Fragment>
      <div className='Main-container'>
        <div className="title-form-container">
          <h1>Start to search github repos!</h1>
          <form className="form-container" onSubmit={sendForm}>
            <div className="form-input">
              <input 
                placeholder="Search for a repository" 
                className="form-control" 
                type='text' 
                name="repoData" 
                onChange={handleInputChanges}
              />
            </div>
            <div className="form-button">
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </form>
        </div>
          {formData.buttonPressed ? <ContainerRepo Data={formData.repoData}/> : null}
      </div>
    </Fragment>   
  );
}

export default SearchForm;