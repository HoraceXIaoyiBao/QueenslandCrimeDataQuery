import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import OffenceCategoryTable from './OffenceCategoryTable';
function OffenceCategory()
{
    function ShowOffenceCategory()
    {
        {
            fetch("https://cab230.hackhouse.sh/offences")
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {
                    ReactDOM.render(OffenceCategoryTable(result), document.getElementById('root'));
                })
               
                .catch(function(error) {
                    console.log("There has been a problem with your fetch operation: ",error.message);
                });
        }
    }

    return (
        <div>
        <button id="offBtn"  class="offbtn"onClick={ShowOffenceCategory}>Offences</button>
        </div>
         );
}
export default OffenceCategory;