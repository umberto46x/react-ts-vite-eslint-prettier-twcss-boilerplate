import { LevelLayout } from '../../layouts/LevelLayout';
import { ExtendedToDoList } from './ExtendedToDoList';
import { ToDoList } from './ToDoList';

export const Level3 = () => {
  return (
    <>
      <LevelLayout level={3} title="Lists, Keys, Forms">
        <ToDoList></ToDoList>
        <ExtendedToDoList></ExtendedToDoList>
      </LevelLayout>
      
    </>
  );
};
