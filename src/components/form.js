import { render } from "@testing-library/react";
import React, {Fragment, useState}from "react";
import ContainerRepo from "./searchApi";

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
      <div className='container mt-5'>
        <h1>Start to search github repos!</h1>
          <form className="row" onSubmit={sendForm}>
            <div className="col-md-5">
              <input 
                placeholder="Search for a repository" 
                className="form-control" 
                type='text' 
                name="repoData" 
                onChange={handleInputChanges}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </form>
          {formData.buttonPressed ? <ContainerRepo Data={formData.repoData}/> : null}
      </div>
    </Fragment>   
  );
}

export default SearchForm;