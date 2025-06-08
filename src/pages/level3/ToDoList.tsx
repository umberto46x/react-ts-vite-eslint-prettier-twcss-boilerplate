import { useState, type ChangeEvent, type FormEvent } from 'react';

type ToDo = {
  id: number;
  text: string;
};

export const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [text, setText] = useState<string>('');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  const deleteToDo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="w-75 mx-auto bg-gray-500 m-4 text-center   ">
        <h4 className="text-center p-4 text-bold text-2xl">To Do List</h4>
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
              <p className="text-2xl align-middle mb-4">{todo.text}</p>
              <button
                className="mx-10 w-10 h-10 text-bold text-2xl text-center align-middle bg-gray-300 hover:bg-gray-200  text-red-500"
                onClick={() => deleteToDo(todo.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
