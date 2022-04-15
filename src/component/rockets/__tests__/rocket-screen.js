import React from "react";
import { Provider } from "react-redux";
import store from '../../../redux/configureStore';
import render from 'react-test-renderer';
import Rocket from "../rocket";

test('Rocket screen load correctly',() => {
    const tree = render.create(
        <Provider store={store}>
            <Rocket />
        </Provider>
    )
})