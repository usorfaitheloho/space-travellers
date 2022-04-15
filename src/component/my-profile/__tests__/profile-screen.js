import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../../redux/configureStore';
import MyProfile from '../profile';

test('My Profile renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
