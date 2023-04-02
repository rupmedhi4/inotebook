import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Components/About';
import NoteState from './context/notes/NotesState';



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
          </div>
        </Router>

      </NoteState>

    </>

  );
}

export default App;
