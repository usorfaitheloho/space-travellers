import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Mission from '../mission';

it('Mission renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
