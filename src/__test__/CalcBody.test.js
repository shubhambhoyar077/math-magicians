import { render, fireEvent } from '@testing-library/react';
import CalcBody from '../components/CalcBody';

it('<CalcBody /> should render all calculator button', () => {
  let buttonClick = '';
  const handelClick = (e) => {
    buttonClick = e.target.value;
  };

  const calcBody = render(<CalcBody handelClick={handelClick} />);
  fireEvent.click(calcBody.getByText('AC'));
  const checkACButton = buttonClick;
  fireEvent.click(calcBody.getByText('+'));
  const checkAddButton = buttonClick;
  fireEvent.click(calcBody.getByText('='));
  const checkEqualButton = buttonClick;

  expect(calcBody).toMatchSnapshot();
  expect(checkACButton).toBe('AC');
  expect(checkAddButton).toBe('+');
  expect(checkEqualButton).toBe('=');
});
