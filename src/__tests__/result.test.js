import renderer from 'react-test-renderer';
import Result from '../components/Result';

it('renders correctly', () => {
  const screen = '';
  const tree = renderer.create(<Result result={screen} />).toJSON();
  expect(tree).toMatchSnapshot();
});
