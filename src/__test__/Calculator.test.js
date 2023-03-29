import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('<Calculator /> should render "4+3=" 7 in display ', () => {
  const calculator = render(<Calculator />);
  fireEvent.click(calculator.getByText('4'));
  fireEvent.click(calculator.getByText('+'));
  fireEvent.click(calculator.getByText('3'));
  fireEvent.click(calculator.getByText('='));

  expect(calculator).toMatchSnapshot();
});
