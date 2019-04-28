import React, { Component } from 'react';

function OffenceCategoryTable(result) {

  
return (

    <table id="offencestable" class="tablesorter">
      <thead>
        <tr><th> Offences Categories </th></tr>
      </thead>

    <tbody id="itemcontainer">

    {result["offences"].map((currElement, index) => (
      <tr><td> {currElement} </td></tr>
      
    ))}

    </tbody>
    </table> 

  );
  
}

export default OffenceCategoryTable;

/////////////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////////////

/*
function OffenceCategoryTable(result) {

  function createOffenceTable(result){
              
      var rows = eval(result);
      var tableStr = '<table id="offencestable" class="tablesorter"><thead><tr>';
      var object = rows[0];
  
      tableStr += '<th> Offences Categories </th>';
      tableStr += '</tr></thead><tbody id="itemcontainer">';
  
      for(var i in result["offences"]){
          tableStr += '<tr>';
              tableStr += '<td>' + result["offences"][i] + '</td>';
          tableStr += '</tr>';
      }
  
      tableStr += '</tbody></table>     ';
      console.log(tableStr);

      return tableStr;
  
  }

  let tableStr= createOffenceTable(result)

  return (
    <div   dangerouslySetInnerHTML={{ __html: tableStr}}></div>
  );
  
}
*/