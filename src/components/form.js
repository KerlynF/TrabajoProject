import { render } from "@testing-library/react";
import React, {Fragment, useState, useEffect}from "react";
import ContainerRepo from "./searchApi";

const SearchForm = () =>
{
  const [formData, setFormData] = useState({
    repoData: ''
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
    
    render(<ContainerRepo Data={formData.repoData}/>);
  }

  return(
    <Fragment>
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
      {/* <h3>{formData.repoData}</h3> */}
    </Fragment>   
  );
}

export default SearchForm;