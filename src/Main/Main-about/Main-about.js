import classes from './Main-about.module.css';
import style2 from './Main-about-2.module.css';
const MainAbout = (props) => {
 const borderStyle = {
        borderBottom : `2px solid ${props.mode?"green":"red"}`,
        width:"20%"
    }
    return(
        <div id='about' className={classes.mainAbout}>
            <h1 style={borderStyle} className={classes.aboutMe}>About me</h1>
            <br />
            <h1 className={classes.title}>Syed Farhan - Web Designer</h1>
            <p style={{padding:"2%"}}>I am a dedicated frontend developer seeking to transition into a full stack role. With a strong foundation in front-end technologies, including HTML, CSS, JavaScript, and ReactJS, I am determined to expand my expertise to encompass backend development and database management. Committed to becoming a versatile and well-rounded full stack developer, I am eager to contribute to the end-to-end development of innovative web applications.</p>
          <div className={classes.flex}>
            <div className={classes.details} style={{width:"30%",margin:"2%",textAlign:"center"}}>
                <p><span style={{fontWeight:"900"}}>Birth : </span></p><hr></hr>
                <p><span style={{fontWeight:"900"}}>Website : </span>NULL</p><hr></hr>
                <p><span style={{fontWeight:"900"}}>Degree : </span>Diploma-CME</p><hr></hr>
                <p><span style={{fontWeight:"900"}}>City : </span>Hyderabad</p><hr></hr>
                <p><span style={{fontWeight:"900"}}>Age : </span>20</p><hr></hr>
                <p><span style={{fontWeight:"900"}}>Email : </span>syedfarhan596@gmail.com</p><hr></hr>
                <p><span style={{fontWeight:"900"}}>Phone No : </span>XXXXXXXXXX</p><hr></hr>
            </div>
            <div style={{width:"50%",margin:"2%"}}>
                <div>
                    <div className={classes.progressTitle}><h5>HTML</h5><p>95%</p></div>
                    <progress className={props.mode?style2.progress:classes.progress} min="0" max="100" value="95"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>CSS</h5><p>90%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="90"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>JavaScript</h5><p>80%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>BootStrap</h5><p>80%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>ReactJS</h5><p>70%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="70"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>NodeJS</h5><p>70%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="70"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>C </h5><p>80%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>C++</h5><p>70%</p></div>
                    <progress  className={props.mode?style2.progress:classes.progress} min="0" max="100" value="70"></progress>
                </div>
            </div>
                
            </div>
          </div>
    ) 
}
export default MainAbout;
