import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

it('renders correctly', () => {
  const handleButtonClick = (btnContent) => btnContent;
  const tree = renderer.create(<Buttons handleButtonClick={handleButtonClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
