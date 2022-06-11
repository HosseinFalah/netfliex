import requests from './Services/Requests';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* Nav */}
      <Navbar/>
      {/* Banner */}
      <Banner/>
      {/* Row */}
      <Row title="NETFLIEX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} isLareg/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App
