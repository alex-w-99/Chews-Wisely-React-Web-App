/* this is where I should add the filters as an object */

import React from 'react';
import './styles/index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findBusinessesThunk } from '../services/yelp/business-thunks';
import makeQuery from "./makeQuery";

const SearchBar = () => {
 const [search, setSearch] = useState('');
 const [location, setLocation] = useState('');
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleSubmit = (event) => {
   event.preventDefault();
   var newSearch;
   console.log("SEARCH: LOCATION IS " + location);
   if (location.length === 0) {
        console.log("SEARCH: location length is 0")
        newSearch = makeQuery(search, "null");
        if (search.length === 0) {
            console.log("And so is search");
            navigate('search/', true);
            return;
        } else {
            navigate('search/' + newSearch.query, true);
        }
   } else {
        if (search.length === 0) {
            console.log("Search length is 0");
            newSearch = makeQuery("restaurants", location);
            navigate('search/restaurants/' + newSearch.location, true);
        } else {
            newSearch = makeQuery(search, location);
            navigate('search/' + newSearch.query + '/' + newSearch.location, true);
        }
   }
   dispatch(findBusinessesThunk(newSearch))
 }

 return(
  <div className="mt-1">
    <form onSubmit={(event) => handleSubmit(event)} className="form-group mb-2 row">
            <div className="col-4 ps-0 pe-0">
                <input type="text"
                       id="restaurant-search"
                       placeholder="Search Restaurants"
                       className="form-control"
                       onChange={(event) => setSearch(event.target.value)}/>
            </div>
            <div className="col-4 mb-0 ps-0 pe-0">
               <input type="text"
                      id="location-search"
                      placeholder="Location"
                      className="form-control"
                      onChange={(event) => setLocation(event.target.value)}/>
              </div>
              <div className="col-4">
               <button type="submit"
                       className="btn btn-danger m"
                       onClick={(event) => handleSubmit(event)}>
                    <i className="bi bi-search"/>
               </button>
               <img src="../../images/yelp-icon.jpg"
                        width={70}/>
              </div>
    </form>
  </div>
 )
};

export default SearchBar;