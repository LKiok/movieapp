let movieChoices = document.querySelector(".button")
movieChoices.addEventListener("click",()=>{
  let choices = document.querySelector(".watch")
  choices.style.display="grid";
  console.log(choices);
})

const playMovieTrailer = (trailerUrl) => {// Function to play the movie trailer
  const backgroundVideo = document.getElementById('background// Function to play the movie trailer-video');// Get the background video and trailer video elements by their IDs
  const trailerVideo = document.getElementById('trailer-video');
  backgroundVideo.style.display = 'none';// Hide the background video and show the trailer video
  trailerVideo.style.display = 'block';
  trailerVideo.src = trailerUrl; // Set the source of the trailer video to the given trailer URL
};

const stopMovieTrailer = () => {// Function to stop the movie trailer
  const backgroundVideo = document.getElementById('background-video');// Get the background video and trailer video elements by their IDs
  const trailerVideo = document.getElementById('trailer-video');
  backgroundVideo.style.display = 'block';// Show the background video and hide the trailer video
  trailerVideo.style.display = 'none';
  trailerVideo.src = '';// Clear the source of the trailer video
};


const displayMoviesData = (element) => {
  let series = document.createElement("div")
  
  series.innerHTML = `
  <img src="${element.poster}" >
  <h3>${element .title}</h3>
  <p>${element.description}</p>
  <p>${element.trailer}</p>
  <p class="tickets">${element.tickets_sold}</p>
  <button>Buy tickets</button>`
  
  document.querySelector(".watch").appendChild(series); // Append the series element to the element with class "watch"

  series.querySelector("button").addEventListener("click",() => {// Add a click event listener to the "Buy tickets" button
   element.tickets_sold+=1// Increment the number of tickets sold and decrease the capacity
   element.capacity-=1
   series.querySelector(".tickets").textContent=element.tickets_sold // Update the ticket count displayed in the series element
  })

  series.addEventListener('mouseover', () => {// Add a mouseover event listener to the series element
    const trailerUrl = element.trailer;
    playMovieTrailer(trailerUrl);
  });

  series.addEventListener('mouseout', () => { // Add a mouseout event listener to the series element
    stopMovieTrailer();
  }); 
}
const getMovieTrailerUrl = (title) => {
  
  const movie = movie.find(movie => movie.title === title);
  return movie ? movie.trailer : "avengers.mp4";// Return the trailer URL if the movie is found, else return a default URL
};

const fetchData = () => {// Function to fetch movie data from the server
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => data.forEach(element =>displayMoviesData(element)))
    .catch(error => console.log('Error:', error));
  }
  fetchData();// Call the fetchData function to initiate data retrieval

  

  
  
  
  
