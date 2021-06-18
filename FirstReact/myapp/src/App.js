import './App.css';
import FunctionalComponent from './Components/FunctionalComponents';
import { ClassComponent, ClassComponent1 } from './Components/ClassComponent';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import Classprops from './Classprops';
import Functionalprops from './Functionalprop';
import NewComp from './Components/NewComp';

//multiple html tags need to be enclosed within the div tag
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Learning Components</h1>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <ClassComponent1></ClassComponent1>
      <Click></Click>
      <Counter></Counter>
      <ParentComp></ParentComp>
      {/* props */}
      <Classprops name="user 1" place="place 1"><p>Child Component</p></Classprops>
      <Classprops name="user 2" place="place 2"><button>Yo</button></Classprops>
      <Functionalprops name="learner 1" place="place x"></Functionalprops>
      <NewComp></NewComp>
    </div>
  );
}

export default App;
