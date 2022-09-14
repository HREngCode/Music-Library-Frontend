import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySong/DisplaySong';
import AddSong from './components/AddSong/AddSong';

function App() {

  const [songs, setSongs] = useState([]);

  // uses useEffect when page gets rendered. Any time we want our table to update, we need to use this.
  useEffect(() => {
    getAllSongs();
    // getSongByName();
    // createSong();
    // updateSong();
    // deleteSong();
    // console.log('Hello World')
  }, []); //used when comoponent is first mounted

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  return (
    <div>
      <div>
        <DisplaySongs songs={songs} getAllSongs={getAllSongs}/>
        <AddSong getAllSongs={getAllSongs}/>
        {/* <button onClick={() => getAllSongs()}>Get All Songs</button> */}
      </div>
  `</div>
  );
}

export default App;
