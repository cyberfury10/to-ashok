import './App.css';
import Form from './form';

function App() {
//  const  data = {
//   id: "asdsad",
//   func: ()=>{

//   }

//  }

//  data.func()

 
  const callbackFunction = () =>{
    return "callback label"
  }

  return (
    <div className="App">
      <Form label="" callback={callbackFunction}/>
    </div>
  );
}

export default App;
