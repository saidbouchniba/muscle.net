import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Learn from './components/Learn';
import Exercices from './components/Exercices';
import Abs from './components/exercices/Abs';
import Biceps from './components/exercices/Biceps';
import Chest from './components/exercices/Chest';
import Back from './components/exercices/Back';
import Legs from './components/exercices/Legs';
import Shoulders from './components/exercices/Shoulders';
import Triceps from './components/exercices/Triceps';
import Diet from './components/Diet';
import Supplement from './components/Supplement';
import Calculator from './components/Calculator';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
       
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Landingpage/>}/>
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/exercises' element={<Exercices/>}/>
        <Route path='/exercises/abs' element={<Abs/>}/>
        <Route path='/exercises/biceps' element={<Biceps/>}/>
        <Route path='/exercises/chest' element={<Chest/>}/>
        <Route path='/exercises/back' element={<Back/>}/>
        <Route path='/exercises/legs' element={<Legs/>}/>
        <Route path='/exercises/Shoulders' element={<Shoulders/>}/>
        <Route path='/exercises/triceps' element={<Triceps/>}/>
        <Route path='/Diet' element={<Diet/>}/>
        <Route path='/supplement' element={<Supplement/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
