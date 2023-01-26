import "./App.css";
import Navbar from "./components/Navbar";
import data from './components/data'
import Main from './components/Main'

function App() {
  var newcontent = data.map((item)=>{
      return <Main key={item.id} item={item}></Main>
  })  
  return <div className="App">
    <Navbar></Navbar>
    <div className="Container">
    {newcontent
    }
    </div>
  </div>;
}

export default App;
