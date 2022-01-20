import React, { useState } from "react";
import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
//import SearchResults from "../SearchResults/SearchResults";
//import Playlist from "../Playlist/Playlist";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ]);
  return (
    <div>
      <h1>🎶 Playlist Builder 🛠️</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {
            //<SearchResults />
            //<Playlist />
          }
        </div>
      </div>
      <div class="waveform"></div>
    </div>
  );
};

export default App;
