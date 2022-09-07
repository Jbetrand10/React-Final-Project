import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
// import AboutUsPic from "../assets/AboutUsPic.jpg"


function About() {
    let navigate = useNavigate()

    return (
      <>
        <h1>About Us</h1>
        {/* <img src={AboutUsPic} alt="BigCo Inc. logo"/> */}
        <p>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.</p>
        <p><Button variant="link" onClick={() => navigate(-1)}>Go Back</Button></p>
      </>
    )
  }
  
  export default About