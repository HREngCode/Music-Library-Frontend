import axios from "axios";

const DeleteButton = ({id, getAllSongs}) => {

    async function deleteSong(){
        await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`).then(() =>{getAllSongs()} );
    }

    return ( 
        <button onClick={deleteSong}>Delete Song</button>
     );
}
 
export default DeleteButton;