import { React, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput("");
  };
  const deleteByValue = (value) => {
    setTasks((oldValues) => {
      return oldValues.filter((item) => item !== value);
    });
  };
  function onSubmit() {
    setTasks([...tasks, input]);
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div className="sub">
        <div className="left">
          <div className="left-top">
            <img
              alt="nivin"
              src="https://media.licdn.com/dms/image/D5603AQHznPBcTYwB3A/profile-displayphoto-shrink_800_800/0/1663668177112?e=2147483647&v=beta&t=ITpP07P4ColngHcvYo1GsMPqPONDKjufwVcxmJ_7WLA"
            />
            <div className="name">
              <h2>Do-it</h2>
              <h1>Nivin Mathew S</h1>
            </div>
          </div>
          <hr></hr>
          <div className="display">
            <div className="display1">
              <h1>{tasks.length}</h1>
              <h2>tasks remaining</h2>
            </div>
            <div className="display2">
              <h1>{count - tasks.length}</h1>
              <h2>tasks completed</h2>
            </div>
            <div className="display3">
              <h1>{count}</h1>
              <h2>total tasks</h2>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <h2>
              Plan your day, plan <span>your tasks</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="inp">
                <div className="dot">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
                  <div className="dot3"></div>
                </div>
                <input
                  value={input}
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  placeholder="What is your next task?"
                />
                <button type="submit" onClick={onSubmit}>
                  Add task
                </button>
              </div>
            </form>
          </div>

          <div className="scroll">
            {tasks
              .slice()
              .reverse()
              .map((item) => {
                return (
                  <div>
                    <div className="todo">
                      <div
                        className={`dot-${Math.floor(Math.random() * 3) + 1}`}
                      />
                      <div className="disp">
                        <h1>{item}</h1>
                      </div>

                      <input
                        type="checkbox"
                        className="cbx"
                        onClick={() => deleteByValue(item)}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
