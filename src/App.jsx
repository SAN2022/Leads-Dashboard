import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  )
}

export default App;