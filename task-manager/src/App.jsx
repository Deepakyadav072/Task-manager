import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const COLUMNS = {
  todo: "To-Do",
  progress: "In-Progress",
  completed: "Completed",
};

export default function App() {
  const [text, setText] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);

  // Load
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text,
        dateTime,
        priority,
        status: "todo",
      },
    ]);

    setText("");
    setDateTime("");
    setPriority("Medium");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id) => {
    const newText = prompt("Edit task");
    if (!newText) return;

    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    setTasks(tasks.map(t =>
      t.id === result.draggableId
        ? { ...t, status: result.destination.droppableId }
        : t
    ));
  };

  return (
    <>
      <div className="header">TASK MANAGER</div>

      <div className="input-bar">
        <input
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>🟡Low</option>
          <option>🟢Medium</option>
          <option>🔴High</option>
        </select>

        <button onClick={addTask}>Go</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container">
          {Object.keys(COLUMNS).map((key) => (
            <Droppable droppableId={key} key={key}>
              {(p) => (
                <div
                  className={`panel ${key}`}
                  ref={p.innerRef}
                  {...p.droppableProps}
                >
                  <h3>{COLUMNS[key]}</h3>

                  {tasks
                    .filter(t => t.status === key)
                    .map((t, i) => (
                      <Draggable key={t.id} draggableId={t.id} index={i}>
                        {(p) => (
                          <div
                            className="task"
                            ref={p.innerRef}
                            {...p.draggableProps}
                            {...p.dragHandleProps}
                          >
                            {t.text}

                            {t.dateTime && (
                              <small>
                                {new Date(t.dateTime).toLocaleString()}
                              </small>
                            )}

                            <div className={`priority ${t.priority.toLowerCase()}`}>
                              {t.priority}
                            </div>

                            <div className="icons">
                              <span onClick={() => editTask(t.id)}>✏️</span>
                              <span onClick={() => deleteTask(t.id)}>🗑️</span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {p.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
}
