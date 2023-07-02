import classes from './Header.module.css';

const Header = (props) =>{
    const shadowStyles = {
        textShadow:`2px 2px 3px ${props.mode?"green":"red"} `,
    }
    console.log(props.mode)
    return(
        <div style={shadowStyles} className={classes.title}>
            <h1>{props.name}</h1>
        </div>
    )
}
export default Header;