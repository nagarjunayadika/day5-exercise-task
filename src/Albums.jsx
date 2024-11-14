import { Link, NavLink, Outlet } from "react-router-dom";

export default function Albums() {
    const location=useLocation();
  const search=new URLSearchParams(location.search);
  console.log(search.get('album'));
  console.log(search.get('song'));
  return (
    <div>
    <h1>Albums</h1>
    <Link to="/albums/album/1">Album 1</Link>
    <Link to="/albums/album/2">Album 2</Link>
    <Link to="/albums/album/3">Album 3</Link>
    <NavLink
        to="/albums/album/4"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Album 4
      </NavLink>
      <NavLink
        to="/albums/album/5"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Album 5
      </NavLink>
    <Outlet/>
    </div>
  )
}