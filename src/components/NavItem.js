import { NavLink } from 'react-router-dom';

export default function NavItem() {
  return (
    <ul className="navitems">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="calculator">Calculator</NavLink></li>
      <li><NavLink to="quote">Quote</NavLink></li>
    </ul>
  );
}
