import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        perspiciatis, architecto enim temporibus rerum quo beatae dolores nihil
        eum quis blanditiis corporis harum quidem consequuntur? Eum a eaque
        necessitatibus distinctio.
      </p>
    </>
  );
}
