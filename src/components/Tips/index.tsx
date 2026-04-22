import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActionTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanso <b>longo</b>
      </span>
    ),
  };

  const tipsForNoActionTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo será <b>descanso longo</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActionTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActionTask[nextCycleType]}
    </>
  );
}
