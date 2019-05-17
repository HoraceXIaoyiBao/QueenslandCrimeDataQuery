
import React, { Component } from 'react';



function SearchOffences(result) {

  
return (
    <div>
    <table id="offencestable" class="tablesorter">
        <thead>
        <tr>
            <th>LGA</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>

            {result.map((result) => (
                <tr>
                    <td> {result.LGA} </td>
                    <td> {result.total} </td>
                </tr>
                
            ))}

        
        </tbody>
    </table>
</div>
    
  );

}




export default SearchOffences;
/*


    function createTable(result){
                    
            var rows = eval(result);
            var tableStr = '<table id="offencestable" class="tablesorter"><thead><tr>';
            var object = rows[0];

            for(var i in object)
                tableStr += '<th>' + i + '</th>';
            tableStr += '</tr></thead><tbody>';

            for(var i = 0; i < rows.length; i++){
                tableStr += '<tr>';
                for(var columnName in rows[i])
                    tableStr += '<td>' + rows[i][columnName] + '</td>';
                tableStr += '</tr>';
            }

            tableStr += '</tbody></table>  ';
            console.log(tableStr);
            return tableStr;
     }


  let tableStr= createTable(result)

  
  return (
    
    
    <div   dangerouslySetInnerHTML={{ __html: tableStr}}></div>
    
  );

*/

/*
return (
    <table id="offencestable" class="tablesorter">
        <thead>
        <tr>
            <th>LGA</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>

            {result.map((result) => (
                <tr>
                    <td> {result.LGA} </td>
                    <td> {result.total} </td>
                </tr>
                
            ))}

        
        </tbody>
    </table>

    
  ); */