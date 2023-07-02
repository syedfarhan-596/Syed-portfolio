import classes from './Main.module.css';
import MainHome from './Main-home/Main-home';
import MainAbout from './Main-about/Main-about';
import MainEducation from './Main-education/Main-education';
import MainServices from './Main-services/Main-services';
import MainCertificates from './Main-certificates/Main-certificates';
import MainContact from './Main-contact/Main-contact';


const Main = (props) => {
    return(
        <div className={classes.main}>
             <MainHome mode={props.mode}/>
             <MainAbout mode={props.mode}/>
             <MainEducation mode={props.mode}/>
             <MainServices mode={props.mode}/>
             <h1 style={{width:"20%",borderBottom:`2px solid ${props.mode?"green":"red"}`}}>Credentails</h1>
             <br></br>
             <MainCertificates mode={props.mode} />
             <MainContact mode={props.mode} />
        </div>
    )
}
    
export default Main;
