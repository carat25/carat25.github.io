import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavBar } from './components/NavBar/NavBar';

configure({ adapter: new Adapter() });


describe("NavBar testing", () => {
test('render the NavBar', () => {
  const wrapper = shallow (<NavBar />);
  console.log(wrapper.debug());

  // const linkElement = getByText("This is navbar");
  // expect(linkElement).toBeInTheDocument();
});
});