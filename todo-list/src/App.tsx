import { Plus } from "feather-icons-react";
import { useEffect, useState, type FormEvent } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage.util";

interface TaskInterface {
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [inputValue, setInputValue] = useState("");
  const counter = tasks.filter((item) => !item.completed).length;


  useEffect(() => {
    const data = getLocalStorage("tasks") as TaskInterface[];
    setTasks(data);
  }, [])


  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask = {
      title: inputValue,
      completed: false,
    };

    const newData = [newTask, ...tasks];

    setInputValue("");
    setTasks(newData);
    setLocalStorage("tasks", newData);
  }

  function handleDeleteTask(index: number) {
    const newList = [...tasks];
    newList.splice(index, 1);
    setTasks(newList);
    setLocalStorage("tasks", newList);
  }

  function handleCheckTask(index: number, value: boolean) {
    const newList = [...tasks];
    newList[index].completed = value;
    setTasks(newList);
    setLocalStorage("tasks", newList);
  }

  return (
    <main>
      <div className="content">
        <form onSubmit={handleAddTask}>
          <h1>Your To Do</h1>
          <div className="input-container">
            <Input value={inputValue} setValue={setInputValue} />
            <Button type="submit" buttonType="fill">
              <Plus />
            </Button>
          </div>
        </form>

        <section className="list">
          {tasks.map((task, index) => (
            <Card
              key={index}
              id={index.toString()}
              title={task.title}
              completed={task.completed}
              onCheck={handleCheckTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </section>

        <footer className="footer">
          <span className="counter">Your remaing todos: {counter}</span>
          <p className="message">
            Job while they sleep.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
