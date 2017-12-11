import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../../src/components/Landing';

it('Landing renders correctly', () => {
    const snapshot = renderer.create(<Landing />).toJSON();
    expect(snapshot).toMatchSnapshot();
});
