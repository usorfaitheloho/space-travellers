import React from 'react';
import { Provider } from 'react-redux';
import render from 'react-test-renderer';
import store from '../../../redux/configureStore';
import Rocket from '../rocket';

test('Rocket screen load correctly', () => {
  const tree = render.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
