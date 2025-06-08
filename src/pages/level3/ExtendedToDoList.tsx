import { useState, type ChangeEvent, type FormEvent } from 'react';

type ExtendedToDo = {
  id: number;
  text: string;
  status: 'Uncompleted' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
};

export const ExtendedToDoList = () => {
  const [todos, setTodos] = useState<ExtendedToDo[]>([]);
  const [text, setText] = useState<string>('');
  const [priority, setPriority] = useState<ExtendedToDo['priority']>('Low');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0 || priority.length === 0) {
      return;
    }
    setTodos([
      ...todos,
      { id: Date.now(), text: text, priority: priority, status: 'Uncompleted' },
    ]);
    setText('');
  };

  const deleteToDo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markToDoAsComplete = (id: number) => {
    const modifiedTodo = todos.find((todo) => todo.id === id) as ExtendedToDo;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    modifiedTodo!.status === 'Uncompleted'
      ? (modifiedTodo!.status = 'Completed')
      : (modifiedTodo!.status = 'Uncompleted');
    const updatedTodos: ExtendedToDo[] = todos.filter((todo) => todo.id !== id);
    updatedTodos.push(modifiedTodo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="w-75 mx-auto bg-gray-500 m-4 text-center   ">
        <h4 className="text-center p-4 text-bold text-2xl">
          Extended To Do List
        </h4>
        <form onSubmit={submit}>
          <input
            disabled={todos.length === 5}
            type="text"
            className=" p-5 m-5  text-center w-50  placeholder:text-gray-200 outline-0 border-gray-300 border-3"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder="Add ToDo text"
          />
          <select
            name="priority"
            className="select w-50 bg-gray-500 border-3 border-gray-300"
            onChange={(e) =>
              setPriority(e.currentTarget.value as ExtendedToDo['priority'])
            }
          >
            <option defaultChecked hidden value="Low">
              Priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button
            type="submit"
            className="bg-gray-300 text-gray-500 w-40 h-20 m-4 rounded-4xl hover:bg-gray-200 hover:text-gray-700 "
          >
            Add To-Do
          </button>
        </form>

        <ul className="border-t-2">
          {todos.map((todo) => (
            <li key={todo.id} className="p-5 border-b-2   ">
              <p
                className={`text-2xl align-middle my-2 
                    ${todo.priority === 'Low' ? 'text-yellow-300' : ''} 
                    ${todo.priority === 'Medium' ? 'text-orange-300' : ''}
                    ${todo.priority === 'High' ? 'text-red-500' : ''}`}
              >
                Priority: {todo.priority}
              </p>
              <p
                className={` text-2xl align-middle my-2 ${todo.status === 'Completed' ? 'line-through' : ''} `}
              >
                {todo.text}
              </p>
              <button
                className="mx-10 w-10 h-10 text-bold text-2xl text-center my-2  align-middle bg-gray-300 hover:bg-gray-200  text-red-500"
                onClick={() => deleteToDo(todo.id)}
              >
                X
              </button>
              <div>
                <label>
                  <input
                    checked={todo.status === 'Completed'}
                    type="checkbox"
                    className="checkbox mx-4 border-3 size-8 border-gray-300"
                    onClick={() => markToDoAsComplete(todo.id)}
                  />
                  Mark As Complete
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
