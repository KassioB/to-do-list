import { Plus } from "feather-icons-react";
import { useState, type FormEvent } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

interface TaskInterface {
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask = {
      title: inputValue,
      completed: false,
    };

    setInputValue("");
    setTasks([newTask, ...tasks]);
  }

  function handleDeleteTask(index: number) {
    const newList = [...tasks];
    newList.splice(index, 1);
    setTasks(newList);
  }

  function handleCheckTask(index: number, value: boolean) {
    const newList = [...tasks];
    newList[index].completed = value;
    setTasks(newList);
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
          <span className="counter">Lorem ipsum dolor sit amet</span>
          <p className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            tempore! Eligendi ipsam voluptas voluptatem perferendis officiis,
            iste numquam possimus cumque iure magni corporis ex in magnam
            recusandae adipisci non consectetur.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
