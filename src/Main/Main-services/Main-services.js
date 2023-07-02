import classes from './Main-services.module.css';

const MainServices = (props) => {
    const borderStyle = {
        borderBottom : `2px solid ${props.mode?"green":"red"}`,
        width:"15%",
    }
    const iconColor = {
        color:props.mode?"green":"red",
    }
    return(
        <div id='services' className={classes.mainServices}>
            <h1 style={borderStyle}>Services</h1>
            <br />
            <div className={classes.serviceCards}>
                <div className={classes.card}>
                    <div >
                        <i style={iconColor} className={`bi bi-layers ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Web Design</h4>
                        <p>Creating visually captivating and user-centric websites that leave a lasting impression.</p>
                    </div>
                </div>
                <div className={classes.card}>
                <div >
                        <i style={iconColor} className={`bi bi-puzzle ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>UI/UX</h4>
                        <p>Designing intuitive interfaces and seamless user experiences for optimal engagement.</p>
                    </div>
                </div>
                <div className={classes.card}>
                <div >
                        <i style={iconColor} className={`bi bi-terminal ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Front-end:</h4>
                        <p>Developing responsive and interactive web applications with cutting-edge technologies.</p>
                    </div>
                </div>
                
                <div className={classes.card}>
                <div >
                        <i style={iconColor} className={`bi bi-phone ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Mobile Apps</h4>
                        <p>Building native Android applications that enhance user experiences on mobile devices.</p>
                    </div>
                </div>
                <div className={classes.card}>
                <div >
                        <i style={iconColor} className={`bi bi-tools ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Maintenance</h4>
                        <p>Ensuring website security, updates, and optimizations for uninterrupted online presence.</p>
                    </div>
                </div>
                <div className={classes.card}>
                <div>
                        <i style={iconColor} className={`bi bi-lightbulb ${classes.cardIcon}`}></i> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Consultation</h4>
                        <p>Providing expert guidance and strategic advice to drive digital success and innovation.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MainServices;