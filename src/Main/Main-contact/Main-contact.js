import classes from './Main-contact.module.css';

const MainContact = (props) =>{
    const titleStyle = {
        borderBottom:`2px solid ${props.mode?"green":"red"}`,
        width:"15%"
    }
    const iconStyles = {
        color:props.mode?"green":"red",
    }
    return(
        <div id='contact' className={classes.mainContact}>
            <h1 style={titleStyle}>Contact</h1>
            <br></br>
            <div className={classes.wrapper}>
                <div className={classes.attributes}>
                    <a href='tel:+91xxxxxxxx'>
                    <i style={iconStyles} className={`bi bi-telephone-fill ${classes.contactIcons}`}></i>
                    <br></br>
                    <h3>Call Us on</h3>
                    <h5>91xxxxxxxx</h5>
                    </a>
                </div>
                <div className={classes.attributes}>
                    <a href='mailto:m.syedfarhan596@gmail.com'>
                    <i style={iconStyles} className={`bi bi-envelope-fill ${classes.contactIcons}`}></i>
                    <br></br>
                    <h3>Mail Me on</h3>
                    <h5>syedfarhan596@gmail.com</h5>
                    </a>
                </div>
                <div className={classes.attributes}>
                    <a href='https://github.com/' >
                    <i style={iconStyles} className={`bi bi-github ${classes.contactIcons}`}></i>
                    <br></br>
                    <h3>GitHub ID</h3>
                    <h5>syedfarhan-596</h5>
                    </a>
                </div>
            </div>
            <div className={classes.wrapper2}>
            <div className={classes.attributes}>
                    <a href='https://www.linkedin.com/in/syedfarhan596/'>
                    <i style={iconStyles} className={`bi bi-linkedin ${classes.contactIcons}`}></i>
                    <br></br>
                    <h3>Connect on LinkedIn</h3>
                    <h5>syedfarhan596</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MainContact;