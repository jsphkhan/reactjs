import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from './components/CheckboxWithLabel';

Enzyme.configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
	const checkbox = shallow(<CheckboxWithLabel labelOn="Bombay" labelOff="Delhi" />);

	expect(checkbox.text()).toEqual('Delhi');

	checkbox.find('input').simulate('change');
	expect(checkbox.text()).toEqual('Bombay');

	//there is only one label inside it
	expect(checkbox.find('label').length).toEqual(1);

	expect(checkbox.find('input').exists()).toEqual(true);

	//change state and see if text changed inside component
	checkbox.setState({isChecked: true});
	expect(checkbox.text()).toEqual('Bombay');
});	