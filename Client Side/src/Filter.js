import React, { Component } from 'react';

import ReactDOM from 'react-dom'

function Filter(result,filtername)
{
    console.log(result);
    let buttonID=filtername+"Filterbutt";
    let dropDownID=filtername+"filterDropDown";
  return(
    <div>
    <label class="filterLabel">{filtername} Filter:</label>
   
    <select class="filterDropDown" id={dropDownID}>
    <option value="None">None</option>
    {result.map((currElement, index) => (
      <option value={currElement}>{currElement}</option>
   ))}
 
  </select>
    </div>

  );
}
export default Filter;
/* <button id={buttonID} class="filterButton" >Add {filtername} Filter</button> */
