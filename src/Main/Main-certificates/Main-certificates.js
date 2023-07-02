import classes from './Main-certificates.module.css';
import javaScript from './JavaScript.jpg';
import javaScript1 from './JavaScript1.jpg';
import wordpress from './wordpress.jpg';
import css from './Css.jpg';
import react from './React.jpg';
import frontEnd from './FrontEnd.jpg';
const MainCertificates = (props) => {
  const certificateStyle = {
    border:`2px solid ${props.mode?"green":"red"}`,
    borderRadius:"3%"
  }
    const btnStyle = {
        color:props.mode?"green":"red",
    }
    return(
        <div id='credentails' className={classes.sliderWrapper}>
            <div className={`carousel slide  carousel-fade ${classes.slider}`} id="carouselExampleIndicators" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div style={certificateStyle} className="carousel-inner">
    <div className="carousel-item active">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={javaScript} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={frontEnd} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={javaScript1} alt="Third slide" />
    </div>
    <div className="carousel-item ">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={wordpress} alt="First slide" />
    </div>
    <div className="carousel-item ">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={css} alt="First slide" />
    </div>
    <div className="carousel-item ">
      <img className={`d-block w-100 ${classes.sliderImg}`} src={react} alt="First slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span style={btnStyle} className={`sr-only ${classes.btns}`}>Prev</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span style={btnStyle} className={`sr-only ${classes.btns}`}>Next</span>
  </a>
</div>
        </div>
    )
}
export default MainCertificates;