import classes from './App.module.css';
import Header from './Header/Header';
import NavBar from './Nav-bar/Nav-bar';
import Main from './Main/Main';
import {useState} from 'react';
function App() {
  const [mode , setMode] = useState(true)
  const [show, setShow] = useState(true)
  const modes = {
    backgroundColor:mode?" #121212":"white",
    color:mode?"white":"black",
  }
  const widthStyle = {
    // width:"82%"
  }
  const widthStyle2 = {
    width:"100%"
  }
  const widthStyle3={
    overflow:"hidden",
    paddingRight:"2%",
    marginRight:"2%"
  }
  const widthStyle4={
    width:"0%"
  }
  return (
    <div style={modes} className={classes.app}>
      <Header mode={mode} name="SYED FARHAN"/>
      <div className={classes.menu}>
      <i className={`bi bi-${show?"x":"list"}`} onClick={()=>setShow(!show)}></i>
      </div>
      <div className={classes.navMainWrapper}>
        <div style={show?widthStyle3:widthStyle4} className={classes.appNavWrapper}>
      {show?<NavBar mode={mode} setMode={setMode}/>:null}
      </div>
      <div style={show?widthStyle:widthStyle2} className={classes.appMainWrapper}>
      <Main mode={mode}/>
      </div>
      </div>
    </div>
  );
}

export default App;
