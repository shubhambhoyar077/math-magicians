import { Outlet } from 'react-router-dom';
import NavItem from './NavItem';
import '../css/navbar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h1>Math Magicians</h1>
        <NavItem />
      </nav>
      <Outlet />
    </>
  );
}
