import { render, act } from '@testing-library/react';
import Quote from '../components/Quote';

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponse(JSON.stringify([{ quote: 'Testing is boring but important', author: 'Henry and Shubham' }]));
});

it('<Quote /> renders correctly with quote: Testing is boring but important', async () => {
  const quote = await act(async () => render(<Quote />));

  expect(quote).toMatchSnapshot();
});
