import React from 'react';
import store from '../../../redux/configureStore'
import renderer from 'react-test-renderer';
import Mission from '../mission';
import { Provider } from 'react-redux';

it('Mission renders correctly', () => {
  const tree = renderer
    .create(
        <Provider store={store}>
            <Mission />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});