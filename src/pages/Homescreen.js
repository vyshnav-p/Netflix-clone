import Nav from "../components/Nav"
import Banner from '../components/Banner';
import Row from "../components/Row";
import requests from "../requests";


function Homescreen() {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Row title='NETFLIX ORIGINALS' fetchurl={requests.fetchNetflixOriginals} islargerow />
        <Row title='Trending now' fetchurl={requests.fetchTrending}/>
        <Row title='Top rated' fetchurl={requests.fetchTopRated} />
        <Row title='Action movies' fetchurl={requests.fetchActionMovies}/>
        <Row title='Comedy movies' fetchurl={requests.fetchComedyMovies}/>
        <Row title='Horror movies' fetchurl={requests.fetchHorrorMovies}/>
        <Row title='Romance movies' fetchurl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchurl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default Homescreen