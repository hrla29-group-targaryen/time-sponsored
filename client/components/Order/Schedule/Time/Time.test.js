import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Time from './Time';

describe('testing Time component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Time />).length).toEqual(1)
	})
	
})
