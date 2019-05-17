
import React, { Component } from 'react';
import SearchOffences from './SearchOffences';
import Chart from './Chart';
import Map from './Map';
import ReactDOM from 'react-dom'
import SearchPanelFilter from './SearchPanelFilter';

function SearchPanel(JWT)
{

    function Search(JWT)
    {    
        let areaFilter=document.getElementById("AreafilterDropDown").value;
        let ageFilter=document.getElementById("AgefilterDropDown").value;
        let genderFilter=document.getElementById("GenderfilterDropDown").value;
        let yearFilter=document.getElementById("YearfilterDropDown").value;
        
        let queryFilter="";
        if(areaFilter!="None") queryFilter=queryFilter+"&area="+areaFilter;
        if(ageFilter!="None") queryFilter=queryFilter+"&age="+ageFilter;
        if(genderFilter!="None") queryFilter=queryFilter+"&gender="+genderFilter;
        if(yearFilter!="None") queryFilter=queryFilter+"&year="+yearFilter;

        console.log(queryFilter);



            let searchContent=document.getElementById("searchContent").value;
           
            console.log(searchContent );
            
            //The parameters of the call
            let getParam = { method: "GET" };
            let head = { Authorization: `Bearer ${JWT}` };
            getParam.headers = head;

            //Homicide (Murder)
            //The URL
            const baseUrl = "https://localhost/api/search?";
            const query = 'offence='+searchContent+queryFilter;
            const url = baseUrl + query;
 
            fetch(encodeURI(url),getParam)
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(function(result) {

                console.log(result);
              
                console.log("fuvk");   

                    ReactDOM.render(SearchOffences(result["result"]), document.getElementById('root'));
                   
                    
                })
                .catch(function(error) {
                        console.log("There has been a problem with your fetch operation: ",error.message);
                    });
    }
    function ShowChart(JWT)
    {

        
        let areaFilter=document.getElementById("AreafilterDropDown").value;
        let ageFilter=document.getElementById("AgefilterDropDown").value;
        let genderFilter=document.getElementById("GenderfilterDropDown").value;
        let yearFilter=document.getElementById("YearfilterDropDown").value;
        
        let queryFilter="";
        if(areaFilter!="None") queryFilter=queryFilter+"&area="+areaFilter;
        if(ageFilter!="None") queryFilter=queryFilter+"&age="+ageFilter;
        if(genderFilter!="None") queryFilter=queryFilter+"&gender="+genderFilter;
        if(yearFilter!="None") queryFilter=queryFilter+"&year="+yearFilter;

        console.log(queryFilter);

                let searchContent=document.getElementById("searchContent").value;
                console.log(searchContent );
                
                //The parameters of the call
                let getParam = { method: "GET" };
                let head = { Authorization: `Bearer ${JWT}` };
                getParam.headers = head;

                //Homicide (Murder)
                //The URL
                const baseUrl = "https://localhost/api/search?";
                const query = 'offence='+searchContent;
                const url = baseUrl + query+queryFilter;

                
                fetch(encodeURI(url),getParam)
                    .then(function(response) {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Network response was not ok.");
                    })
                    .then(function(result) {

                    console.log(result);
           

                
                    ReactDOM.render(  
                        <div class="chart" > 
                    
                        <canvas id="myChart" width="300" height="200" ></canvas>
                            
                        </div>, 
                    document.getElementById('root'));
                    Chart(result["result"])

                    })
                    .catch(function(error) {
                            console.log("There has been a problem with your fetch operation: ",error.message);
                        });         
                   
    }

    function ShowMap(JWT)
    {

        
        let areaFilter=document.getElementById("AreafilterDropDown").value;
        let ageFilter=document.getElementById("AgefilterDropDown").value;
        let genderFilter=document.getElementById("GenderfilterDropDown").value;
        let yearFilter=document.getElementById("YearfilterDropDown").value;
        
        let queryFilter="";
        if(areaFilter!="None") queryFilter=queryFilter+"&area="+areaFilter;
        if(ageFilter!="None") queryFilter=queryFilter+"&age="+ageFilter;
        if(genderFilter!="None") queryFilter=queryFilter+"&gender="+genderFilter;
        if(yearFilter!="None") queryFilter=queryFilter+"&year="+yearFilter;

        console.log(queryFilter);

                let searchContent=document.getElementById("searchContent").value;
                console.log(searchContent );
                
                //The parameters of the call
                let getParam = { method: "GET" };
                let head = { Authorization: `Bearer ${JWT}` };
                getParam.headers = head;

                //Homicide (Murder)
                //The URL
                const baseUrl = "https://localhost/api/search?";
                const query = 'offence='+searchContent;
                const url = baseUrl + query+queryFilter;

                
                fetch(encodeURI(url),getParam)
                    .then(function(response) {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Network response was not ok.");
                    })
                    .then(function(result) {

                    console.log(result);
                
                    console.log("fuvk");   
                   
                
                    ReactDOM.render(  
                        <div class="map">
                        <div id="mapDiv" style={{float:"right",height : "800px",width : "80%"}}></div>
                        </div>
                        , 
                    document.getElementById('root'));
                    Map(result["result"]);

                    })
                    .catch(function(error) {
                            console.log("There has been a problem with your fetch operation: ",error.message);
                        });         
                   
    }

    return(
        <div id="searchInput">
        <input type="text" id="searchContent" class="logintText" defaultValue="Search Here "></input>
        <button id="serBtn" class="SearchChartbutt" onClick={Search.bind(this,JWT)}>Search</button>
        <button id="ChartButton" class="SearchChartbutt" onClick={ShowChart.bind(this,JWT)} >Show Chart</button>
        <button id="MapButton" class="SearchChartbutt" onClick={ShowMap.bind(this,JWT)} >Show Map</button>

        
        </div>
    )

}
export default  SearchPanel;