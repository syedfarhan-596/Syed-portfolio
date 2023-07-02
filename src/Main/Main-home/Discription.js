const Discription = (props) => {
    console.log(props.mode)
    return(
        <div>
            <h1>Welcome to my portfolio!</h1>
            
            <p> I am a skilled web designer progressing towards becoming a full-stack web developer.
                 Proficient in HTML, CSS, JavaScript, Bootstrap, and ReactJS, I specialize in 
                 designing visually appealing and user-friendly interfaces. With a focus on creating 
                 responsive and interactive websites, my projects reflect a seamless blend of 
                 aesthetics and functionality. As I continue to upgrade my skills, I am dedicated 
                 to staying abreast of the latest web development trends and technologies. Let's 
                 collaborate to bring your ideas to life and create impactful web solutions that 
                 engage and inspire.</p>
            <button className={`btn btn-${props.mode?"success":"danger"}`}>
                Contact me 
            </button>
        </div>
    )
}
export default Discription;