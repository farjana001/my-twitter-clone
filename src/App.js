import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';


function App() {
  return (
    <div className="app">
     {/* Sidebar */}
      <Sidebar />

     {/* Feed */}
      <Feed />
     {/* Widget */}
     <Widget />
    </div>
  );
}

export default App;
