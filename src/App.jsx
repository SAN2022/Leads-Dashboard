import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

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