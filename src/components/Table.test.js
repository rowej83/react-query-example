import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

// test('adds 1 + 2 to equal 3', () => {
//   expect(1+2).toBe(3);
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
});
