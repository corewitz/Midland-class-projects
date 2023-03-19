
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

document.getElementById("go").addEventListener("click", (e) => {
    e.preventDefault();
    if (userInput.value.length < 4) {
      document.querySelector("#errorMessage").innerText = "SEARCH WITH MORE THAN 3 LETTERS PLEASE";
      clearData();
     } else {
      document.querySelector("#errorMessage").innerText = ""
    fetch(`http://www.omdbapi.com/?i=tt3896198&t=${userInput.value}&type=${searchType.value}&y=${searchYear.value}&apikey=dc540112`) // jsonplaceholder is a free fake API for testing
      .then((response) => { // This is a promise
        console.log(response); // Logs the response object
        if (!response.ok) { // If the promise failed...
          console.log(response.status);
           // Log its status
        }
        return response.json(); // This parses the response as a JSON, which also returns a promise
      })
      //.then((res) => console.log(res)); // handles the promise given by the return statement
      .then((data) => {
        console.log(data);
        if(data.Response == "False") {
          document.querySelector("#errorMessage").innerText = "SHIT MAN";
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


   
