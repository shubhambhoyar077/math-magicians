import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('renders correctly', () => {
  const navBar = render(<BrowserRouter><NavBar /></BrowserRouter>);
  expect(navBar).toMatchSnapshot();
});
