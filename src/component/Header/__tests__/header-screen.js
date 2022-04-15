import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

test('Header renderes correctly', () => {
  const tree = renderer.create(
    <Router>
      <Header />
    </Router>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
