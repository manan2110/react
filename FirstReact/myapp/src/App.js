import './App.css';
import FunctionalComponent from './Components/FunctionalComponents';
import { ClassComponent, ClassComponent1 } from './Components/ClassComponent';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
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
    </div>
  );
}

export default App;
