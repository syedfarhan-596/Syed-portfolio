import classes from './Nav-bar.module.css';
import styles from './Nav-bar1.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import resume from './resume.jpg'
const NavBar = (props) => {
    return(
        <Router>
        <div className={classes.navBar}>
            <div className={classes.fixedData}>
            <div className={classes.name}>
                <div>
                    <h1><span className={classes.s}>S</span><span className={classes.f}>F</span></h1>
                </div>
                <div>
                    <div onClick={()=>props.setMode(!props.mode)} className={classes.toggleBtn}>
                    <i className={`bi bi-lightbulb-${props.mode?'fill':'off'}`}></i>
                    </div>
                </div>
            </div>
            
            <div >
                <Link to="#home"><h3 className={props.mode?classes.links:styles.links}>Home</h3></Link><hr></hr>
                <Link to="#about"><h3 className={props.mode?classes.links:styles.links}>About</h3></Link><hr></hr>
                <Link to="#services"><h3 className={props.mode?classes.links:styles.links}>Services</h3></Link><hr></hr>
                <Link to="#credentails"><h3 className={props.mode?classes.links:styles.links}>Credentials</h3></Link><hr></hr>
                <Link to="#contact"><h3 className={props.mode?classes.links:styles.links}>Contact</h3></Link><hr></hr>
                <a href={resume} download ><h3 className={props.mode?classes.links:styles.links}>Resume</h3></a><hr></hr>
            </div>
            
            </div>
        </div>
        </Router>
    )
}
export default NavBar;