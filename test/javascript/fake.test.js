import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import LandingPage from 'ArtilleryComputerUI/components/landingPage';

test('rendered component', () => {
  const wrapper = shallow(<LandingPage
	/>);
	const myText = wrapper.render().text()
  expect(myText).to.equal('Hello World');
});