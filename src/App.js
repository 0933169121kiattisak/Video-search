import './App.css';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import { useState } from 'react';

function App() {

  const [video,setVideo] = useState("inception");
  const [videoURL,setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");
  const [searchedVideo, setSearchedVideo] = useState("");

  function haddleSearch() {
    setSearchedVideo(video)
    movieTrailer(video).then(res => {
      setVideoURL(res);
      console.log(res)
    });
    setVideo("");
  };

  return (
    <div className="App">
      <div className='search-box'>
        <label>
        Search for any movies/shows:{" "}
        </label>
        <input type='text' value={video} onChange={(e) => {setVideo(e.target.value)}}></input>
        <button onClick={() => {haddleSearch()}}>Search</button>
      </div>
      <div className='card-video'>
        <ReactPlayer className="video" url={videoURL} controls={true} />
        <h1>{searchedVideo ? searchedVideo : ""}</h1>
      </div>
      
    </div>
  );
}

export default App;
