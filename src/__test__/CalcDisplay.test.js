import { render } from '@testing-library/react';
import CalcDisplay from '../components/CalcDisplay';

it('renders correctly', () => {
  const calcDisplay = render(<CalcDisplay />);
  expect(calcDisplay).toMatchSnapshot();
});
