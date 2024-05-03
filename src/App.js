
import SideBar from "./components/left/SideBar";
import RightSide from "./components/right/RightSide"
import './styles/app.scss'

function App() {
  return (
   <div className="app reset">
      <div className="app_leftside">      <SideBar/></div>
      <div className="app_rightside">    <RightSide/></div>

  

   </div>
  );
}

export default App;
