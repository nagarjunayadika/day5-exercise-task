import { Navigate, useParams } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Home() {
  const isLoggedIn=true;
  const {songId}=useParams();
  const songs=[
    'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
    'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
  ]
  return (
    <div>
      {!isLoggedIn && <Navigate to="/albums"/>}
    <h1>Home</h1>
    <Link to="/home/0">Play Song 1</Link>
    <Link to="/home/1">Play Song 2</Link>
    <div>
<img src="https://s3images.zee5.com/wp-content/uploads/2023/07/ANI-20230713102235.jpg" alt="movie poster" className="movie-poster"/>
    <AudioPlayer
    autoPlay
    src={songs[songId]}
    // other props here
  />
  </div>
    </div>
  )
}