import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavItem from '../components/NavItem';

it('renders correctly', () => {
  const navItem = render(<BrowserRouter><NavItem /></BrowserRouter>);
  expect(navItem).toMatchSnapshot();
});
