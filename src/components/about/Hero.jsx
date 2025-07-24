import Avtar from "../images/Me.png"



const Hero = () => {
  return (
    <div className="heroCtnt">
    <div className="aboutAvtar"> <img src={Avtar} /></div>
    <div className="aboutAvtar"><h1>RAHUl SONI</h1>
    <p>AI & Full Stack Developer</p>
    <p>I love building smart, useful software. Currently exploring new opportunities in AI and web development.</p></div>
     

    </div>
  );
};

export default Hero;
