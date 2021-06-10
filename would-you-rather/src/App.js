import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import Home from './components/Home'
import Results from './components/Results'




function App() {
  return (
    <div className="container pt-5">
      <div className="row row-cols-3">
        <div className="col"><Nav /></div>
        <div className="col">Hello Shaun</div>
        <div className="col"><a href="#">Logout</a></div>
        <div className="col"></div>
        <div className="col-7"><Results /></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
