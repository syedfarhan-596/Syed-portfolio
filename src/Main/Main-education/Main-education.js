import classes from './Main-education.module.css';
const MainEducation = (props) => {
    const starStyles={
        color:props.mode?"green":"red",
    }
    return(
        <div  className={classes.mainEducation}>
            <div className={classes.education}>
                <h3>Education</h3>
                <i style={starStyles} className={`bi bi-star-fill ${classes.starIcon}`}></i>
                <ul>
                <li>
                    <dt style={{display:'flex'}}><i className="bi bi-calendar2-event"></i>2021-2024<p className='text-muted'></p></dt>
                    <dt>Bachelor Of Engineering In Information Technology </dt>
                    <dd>Ongoing 4-year Bachelor of Engineering in Information Technology, entered in 2nd year due to completion of a 3-year diploma in computer science. Developing comprehensive IT skills and knowledge.</dd>
                </li>
                </ul>
                <i style={starStyles} className={`bi bi-star-fill ${classes.starIcon}`}></i>
                <ul>
                <li>
                    <dt style={{display:'flex'}}><i className="bi bi-calendar2-event"></i>2018-2021<p className='text-muted'></p></dt>
                    <dt>Diploma in Computers Science </dt>
                    <dd>3-Year Diploma in Computer Science: Equipped with a solid foundation in computer science principles and practical skills for developing innovative software solutions.</dd>
                </li>
                </ul>
                <i style={starStyles} className={`bi bi-star-fill ${classes.starIcon}`}></i>
                <ul>
                <li>
                    <dt style={{display:'flex'}}><i className="bi bi-calendar2-event"></i>2018-2021<p className='text-muted'></p></dt>
                    <dt>Schooling</dt>
                    <dd>Completed primary and secondary schooling, acquiring a well-rounded education and laying the foundation for future academic pursuits and career growth.</dd>
                </li>
                </ul>
                
            </div>
            <div>
                <h3>Experience</h3>
                <i style={starStyles} className={`bi bi-star-fill ${classes.starIcon}`}></i>
                <ul>
                <li>
                    <dt style={{display:'flex'}}><i className="bi bi-calendar2-event"></i>2023(May-June)<p className='text-muted'></p></dt>
                    <dt>Python</dt>
                    <dd>Successfully completed a virtual Python summer internship, gaining practical experience in Python programming and strengthening skills in software development.</dd>
                </li>
                </ul>
                <i style={starStyles} className={`bi bi-star-fill ${classes.starIcon}`}></i>
                <ul>
                <li>
                    <dt style={{display:'flex'}}><i className="bi bi-calendar2-event"></i>2018(Mar-July)<p className='text-muted'></p></dt>
                    <dt>Andriod App Development</dt>
                    <dd>Completed a virtual summer internship in Android app development, gaining hands-on experience in building Android applications and expanding skills in mobile app development.</dd>
                </li>
                </ul>
            </div>
        </div>
    )
}
export default MainEducation;