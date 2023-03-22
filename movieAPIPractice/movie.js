//import axios from "axios";
//const axios = require("axios");
//NEED TO ADD SCRIPT TAG IN HTML

//const { default: axios } = require("axios");


let userInput = document.getElementById("userInput");
let searchType = document.getElementById("searchType");
let searchYear = document.getElementById("searchYear");

function clearData() {
  document.querySelector("#mTitle").innerText = "";
  const poster = document.querySelector("#poster");
  poster.setAttribute('src', "");
  document.querySelector("#year").innerText = "";
  document.querySelector("#genre").innerText = "";
  document.querySelector("#director").innerText = "";
  document.querySelector("#actors").innerText = "";
}


///REGULAR FETCH 
/*document.getElementById("go").addEventListener("click", (e) => {
    e.preventDefault();
    if (userInput.value.length < 4) {
      document.querySelector("#errorMessage").innerText = "SEARCH WITH MORE THAN 3 LETTERS PLEASE";
      clearData();
     } else {
      document.querySelector("#errorMessage").innerText = ""
      fetch(`http://www.omdbapi.com/?i=tt3896198&t=${userInput.value}&type=${searchType.value}&y=${searchYear.value}&apikey=dc540112`) // jsonplaceholder is a free fake API for testing
      .then((response) => { 
        console.log(response);
        if (!response.ok) { 
          console.log(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if(data.Response == "False") {
          document.querySelector("#errorMessage").innerText = "WE CANT FIND ANYTHING LIKE THAT";
          clearData();
          } else {
        document.querySelector("#mTitle").innerText = data.Title;
        const poster = document.querySelector("#poster");
        poster.setAttribute('src', data.Poster);
        document.querySelector("#year").innerText = data.Year;
        document.querySelector("#genre").innerText = data.Genre;
        document.querySelector("#director").innerText = data.Director;
        document.querySelector("#actors").innerText = data.Actors;
             }
          }); 
        }
      }); 
      */
      
      
      
      
      //TRY CATCH BLOCK
      /*
      document.getElementById("go").addEventListener("click", async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://www.omdbapi.com/?i=tt3896198&t=${userInput.value}&type=${searchType.value}&y=${searchYear.value}&apikey=dc540112`)
          .then ((response) => {
            console.log(response);
            if (!response.ok) {
              console.log(response.status);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.Response === "False") {
              document.querySelector("#errorMessage").innerText = "WE CANT FIND ANYTHING LIKE THAT";
              clearData();
            } else {
              document.querySelector("#mTitle").innerText = data.Title;
              const poster = document.querySelector("#poster");
              poster.setAttribute('src', data.Poster);
              document.querySelector("#year").innerText = data.Year;
              document.querySelector("#genre").innerText = data.Genre;
              document.querySelector("#director").innerText = data.Director;
              document.querySelector("#actors").innerText = data.Actors;
            }
          });
        } catch (error) {
          console.log(error);
          if (error.response) {
            console.log(error.response.status);
          }
        }
      });
      */
      

      
      
      //AXIOS
        document.getElementById("go").addEventListener("click", async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&t=${userInput.value}&type=${searchType.value}&y=${searchYear.value}&apikey=dc540112`);
      
          console.log(response);
      
          const data = response.data;
      
          console.log(data);
      
          if (data.Response === "False") {
            document.querySelector("#errorMessage").innerText = "WE CANT FIND ANYTHING LIKE THAT";
            clearData();
          } else {
            document.querySelector("#mTitle").innerText = data.Title;
            const poster = document.querySelector("#poster");
            poster.setAttribute('src', data.Poster);
            document.querySelector("#year").innerText = data.Year;
            document.querySelector("#genre").innerText = data.Genre;
            document.querySelector("#director").innerText = data.Director;
            document.querySelector("#actors").innerText = data.Actors;
          }
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.log(error.response.status);
          }
        }
      });
    
    
    
    
    
    
      











