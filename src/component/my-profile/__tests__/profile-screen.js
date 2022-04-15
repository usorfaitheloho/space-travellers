import React from "react";
import { Provider } from "react-redux";
import store from '../../../redux/configureStore';
import renderer from 'react-test-renderer';
import MyProfile from "../profile";

test('My Profile renders correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <MyProfile />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})