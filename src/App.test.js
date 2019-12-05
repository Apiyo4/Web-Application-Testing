import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', ()=>{
  const wrapper = rtl.render(<App />)
  // wrapper.debug();
  const basseballHeader = wrapper.queryByText(/baseball/i)
  expect(basseballHeader).toBeInTheDocument();
})
it('containes countStrike and countBall', ()=>{
  const wrapper = rtl.render(<App />)
  const countElement = wrapper.queryByText(/countStrike/i)
    expect(countElement).toBeInTheDocument()
})