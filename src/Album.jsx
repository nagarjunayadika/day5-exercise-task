import { useParams } from "react-router-dom"

export default function Album() {
  const {albumId} = useParams();
  return (
    <h1>Album {albumId}</h1>
  )
}