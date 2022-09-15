import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySong/DisplaySong';
import AddSong from './components/AddSong/AddSong';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css'

function App() {

  const [songs, setSongs] = useState([]);

  // uses useEffect when page gets rendered. Any time we want our table to update, we need to use this.
  useEffect(() => {
    getAllSongs();
  }, []); //used when comoponent is first mounted

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  return (
      <div>
        <div>
          <h2>MY MUSIC</h2>
        </div>
        <div className='searchBar'>
          <SearchBar songs={songs} setSongs={setSongs}/>
        </div>
        <div>
          <AddSong getAllSongs={getAllSongs}/>
        </div> 
        <div>
          <DisplaySongs songs={songs} getAllSongs={getAllSongs}/>
        </div>
        <div>
        </div>      
      </div>
  );
}

export default App;
