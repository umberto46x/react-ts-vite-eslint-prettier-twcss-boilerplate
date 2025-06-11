import { LevelLayout } from '../../layouts/LevelLayout';
import { Counter } from './Counter';
import { Feedback } from './Feedback';
import { Toggler } from './Toggler';

export const Level2 = () => {
  return (
    <>
      <LevelLayout
        level={2}
        title="UseState,EventHandling,Conditional rendering, State-Controlled form
        values"
      >
        <Toggler></Toggler>
        <Counter></Counter>
        <Feedback></Feedback>
      </LevelLayout>
      
    </>
  );
};
