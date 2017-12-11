import React from 'react';
import renderer from 'react-test-renderer';
import { SignForm } from '../../src/components/SignForm';

it('Sign Form renders correctly', () => {
    const snapshot = renderer.create(<SignForm />).toJSON();
    expect(snapshot).toMatchSnapshot();
});
