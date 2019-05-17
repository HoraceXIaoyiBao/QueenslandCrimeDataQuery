import React, { Component } from 'react';
import { useState, useEffect } from "react";
import SearchOffences from './SearchOffences';
import Filter from './Filter';
import Chart from './Chart';
import ReactDOM from 'react-dom'
function SearchPanelFilter()
{
    fetchAreaFilterdata();
    fetchAgeFilterdata();
    fetchGenderFilterdata();
    fetchYearFilterdata();

    
    function fetchAreaFilterdata()
    {      fetch("https://localhost/api/areas")
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {

                    console.log(result);

                    ReactDOM.render(Filter(result["areas"],"Area"), document.getElementById('areaFilter'));
                })
               
                .catch(function(error) {
                    console.log("There has been a problem with your fetch operation: ",error.message);
                });

       
                //return result
    }

  
    function fetchAgeFilterdata()
    {      fetch(" https://localhost/api/ages")
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {

                    console.log(result);

                    ReactDOM.render(Filter(result["ages"],"Age"), document.getElementById('ageFilter'));
                })
               
                .catch(function(error) {
                    console.log("There has been a problem with your fetch operation: ",error.message);
                });

       
                //return result
    }

    function fetchGenderFilterdata()
    {      fetch("https://localhost/api/genders")
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {

                    console.log(result);

                    ReactDOM.render(Filter(result["genders"],"Gender"), document.getElementById('genderFilter'));
                })
               
                .catch(function(error) {
                    console.log("There has been a problem with your fetch operation: ",error.message);
                });

       
                //return result
    }
    function fetchYearFilterdata()
    {      fetch("https://localhost/api/years")
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {

                    console.log(result);

                    ReactDOM.render(Filter(result["years"],"Year"), document.getElementById('yearFilter'));
                })
               
                .catch(function(error) {
                    console.log("There has been a problem with your fetch operation: ",error.message);
                });

       
                //return result
    }
   
    return (null);


}
export default SearchPanelFilter;

