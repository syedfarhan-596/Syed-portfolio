import classes from './Main-home.module.css';
import Discription from './Discription';
import myPic from './myPic.jpg'
const MainHome = (props) => {
    const imgStyles = {
        boxShadow : `2px 2px 4px 4px ${props.mode?"green":"red"}`,
    }
    const homeStyles = {
        boxShadow: `0px 0px 10px 3px ${props.mode?"green":"red"}`,
    }
    return(
        <div id='home' style={homeStyles} className={classes.home}>
            <div className={classes.discription}>
                <Discription mode={props.mode} />
            </div>
            <img style={imgStyles} className={classes.myPic} src={myPic} alt="Syed Farhan" />
        </div>
    )
}
export default MainHome;