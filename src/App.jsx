import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen p-10">
      <div className="container mx-auto px-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
