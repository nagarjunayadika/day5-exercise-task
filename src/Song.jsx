import { useNavigate, useParams } from "react-router-dom"

export default function Song() {
  const {songId}=useParams();
  const navigate=useNavigate();

  const handleClick=()=>{
    // filter, add, sub
    navigate("/albums");
  }

  return (
    <div>
    <h1>Song {songId}</h1>
    <button onClick={handleClick}>Redirect to Albums</button>
    </div>
  )
}