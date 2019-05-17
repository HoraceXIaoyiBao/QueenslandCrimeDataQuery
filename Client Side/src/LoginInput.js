
import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import ReactDOM from 'react-dom'

import SearchPanelFilter from './SearchPanelFilter';

function ButtonInput()
{

  let JWT = null;
  
  function Login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    console.log(username);
    
      fetch("https://localhost/api/login", {
          method: "POST",
          body: 'email='+username+'&'+'password='+password,
          headers: {
              "Content-type": "application/x-www-form-urlencoded"
          }
      })
          .then(function(response) {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .then(function(result) {
          
              let loginTitle= document.getElementById("loginTitle") ;
              loginTitle.innerHTML="Hello! "+username;

    

              console.log( loginTitle.innerHTML);

              JWT = result.token;
              console.log(JWT);
                          
              const SearchPanelElement = document.getElementById("SearchPanel");
              ReactDOM.render(SearchPanel(JWT), SearchPanelElement);

              SearchPanelFilter()

            
          })
          .catch(function(error) {
              alert("The username or password is not correct");
              console.log("There has been a problem with your fetch operation: ",error.message);
          });
  }




  function Register(){
    
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    var pattern  = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if(!pattern.test(username))
        { 
          alert("Please choose a Email address ");
          return;
        }
        console.log(username);
        console.log(password);
      fetch("https://localhost/api/register", {
        method: "POST",
        body: 'email='+username+'&' + 'password='+password,
        //body: 'email=xxxxx%40xxxx.xxx&password=xxxxxxx', 
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
        .then(function(response) {
          if (response.ok) {
            return response.json();
          }
          alert("This username is already existed");
          throw new Error("Network response was not ok");
        })
        .then(function(result) {
          alert("Success!");
          let regBtn = document.getElementById("regBtn");
          
          regBtn.disabled = true;
        })
        .catch(function(error) {
          console.log("There has been a problem with your fetch operation: ",error.message);
        });
  }

    return (

        <div>
         

            <p class= "loginTitle" id="loginTitle">Login</p>
            <div id="Profile"> </div>
              <input type="text" id="username" class="logintText" defaultValue="Username"></input>
              <input type="password" id="password" class="logintText" defaultValue="Password"></input>
      
              <input type="button" id="regBtn" class="LRbutton"  onClick={Register} value="Register"></input>
              <input type="button" id="logBtns" class="LRbutton" onClick={Login}  value="Login"></input>
           
 
        </div>
         );
}

export default ButtonInput;
