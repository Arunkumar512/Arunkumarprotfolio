import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import Project from './component/Project';
import Award from './component/Award';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Project/>
      <Award/>
    </div>
  );
}

export default App;
