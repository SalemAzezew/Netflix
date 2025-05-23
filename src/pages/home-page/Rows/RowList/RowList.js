import React from 'react'
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
        <Row  
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
        {/* <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} /> */}
        {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
        {/* <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} /> */}
        <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaryMovies} />
        <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
        {/* <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} /> */}
        {/* <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} /> */}
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
        <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
        {/* <Row title="Science Fiction Movies" fetchUrl={requests.fetchScienceFictionMovies} /> */}
    </>
  )
}

export default RowList