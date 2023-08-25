import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests";


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow/>
      <Row 
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isLargeRow/>
      <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRatedMovies} 
          isLargeRow/>
      <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies} 
          isLargeRow/>
      <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies} 
          isLargeRow/>
      <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies} 
          isLargeRow/>
      <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies} 
          isLargeRow/>
      <Row
          title="Documentaries Movies"
          fetchUrl={requests.fetchDocumentaries} 
          isLargeRow/>
      

    </div>
  );
}

export default App;
