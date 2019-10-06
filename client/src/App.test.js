import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

it('renders a div with playerData', () => {
    const wrapper = rtl.render(
        <App />
    );
    console.log(wrapper.debug())
})