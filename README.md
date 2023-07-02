# FlatDango.
FlatDango is a web application that allows users to browse and watch movie trailers. It provides a user-friendly interface for searching movies, displaying their details, and playing trailers.
# Getting Started.
To get started with FlatDango, follow these steps:

Clone the repository: git clone https://github.com/your-username/flatdango.git
Navigate to the project directory: cd movieapp.
Open index.html in your preferred web browser.

# API.
FlatDango fetches movie data from a server using the Fetch API. The movie data is retrieved from the /movies endpoint. The server should be running at http://localhost:3000.

#Code snippets.

for fetching data:
const fetchData = () => {
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => data.forEach(element =>displayMoviesData(element)))
    .catch(error => console.log('Error:', error));
  }
  fetchData();
