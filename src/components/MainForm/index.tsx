import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task:'
          id='meuInput'
          type='text'
          placeholder='Digite a tarefa...'
        />
      </div>

      <div className='formRow'>
        <p>
          Nesse ciclo <b>descanse</b> por <b>25min.</b>
        </p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
