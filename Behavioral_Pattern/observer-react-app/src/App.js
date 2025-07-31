import './App.css';
import TodoInput from './components/TodoInput';
import Notification from './components/Notification';


function App() {
  return (
    <div className="App">
         <div style={{ padding: "20px" }}>
      <h2>📝 Todo  App </h2>
      <TodoInput />
      <Notification />
    
    </div>
    </div>
  );
}

export default App;
