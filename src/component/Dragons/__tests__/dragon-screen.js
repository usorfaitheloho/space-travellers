import React from 'react';
import render from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragon from '../Dragons';
import store from '../../../redux/configureStore';

test('Dragon screen renders correctly', () => {
  const tree = render.create(
    <Provider store={store}>
      <Dragon />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
