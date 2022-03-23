import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Navbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
