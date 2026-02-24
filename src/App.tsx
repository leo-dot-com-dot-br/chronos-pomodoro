import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
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
