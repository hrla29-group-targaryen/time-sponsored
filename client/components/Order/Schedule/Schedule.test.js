import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Schedule from './Schedule';

describe('testing Schedule component', ()=> {

	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<Schedule />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Schedule />).length).toEqual(1)
	})

	it('should check state ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(1)
		expect(wrapper.state().button_selected).toEqual('today')	
	})

	it('should check button_changer ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(3)
		wrapper.instance().button_changer("asap")
		expect(wrapper.state().button_selected).toEqual('asap')	
		wrapper.instance().button_changer("today")
		expect(wrapper.state().button_selected).toEqual('today')	
		wrapper.instance().button_changer("later")
		expect(wrapper.state().button_selected).toEqual('later')	
	})

	it('should check order-schedule-exit button ', ()=> {
		let inputCompare
		let mockRoute_changer = (input) => {
			inputCompare = input
		}
		let wrapper = shallow(<Schedule route_changer={mockRoute_changer}/>)
		wrapper.find('#order-schedule-exit').simulate('click')
		expect.assertions(1)
		expect(inputCompare).toEqual('delivery')	
	})

	it('should check order-schedule-items-today-select ', ()=> {
		let wrapper = shallow(<Schedule />)
		expect.assertions(3)
		wrapper.find('#order-schedule-buttons-asap').simulate('click')
		expect(wrapper.state().button_selected).toEqual('asap')	
		wrapper.find('#order-schedule-buttons-today').simulate('click')
		expect(wrapper.state().button_selected).toEqual('today')	
		wrapper.find('#order-schedule-buttons-later').simulate('click')
		expect(wrapper.state().button_selected).toEqual('later')	
	})
})
