import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import emailjs from"emailjs-com"
import "./App.css";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Flash from 'react-reveal/Flash';
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-scroll";
import Typical from 'react-typical';
import Todo from "./components/todo";
function App() {
  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight / 1.2;

      if (windowHeight > textPosition) {
        textRef.current.classList.remove('push-left');
        imageRef.current.classList.remove('push-right');
      } else {
        textRef.current.classList.add('push-left');
        imageRef.current.classList.add('push-right');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_3ujsdbg', e.target, 'aFvJhrvjVAVGqQ8od')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="App" >
      <div className="home">
      <nav className="navbar">
      <h1 className="t">To Do</h1>
      <div className="navbar-items" >
        <Link to="home" smooth={true} >Home</Link>
        <Link to="too" >ToDo</Link>
        <Link to="benf" smooth={true} duration={1000}>Benefits</Link>
        <Link to="more" smooth={true} duration={10}>More</Link>
        <Link to="Contact" smooth={true} duration={10}>Contact</Link>
      </div>
      </nav>
      <h1 className="h1">To Do</h1>
      <p className="P1">List
      </p>
      <Link to="too" smooth={true} duration={1000}><AiFillCaretDown className="d" /></Link>

    </div>
    <div className="too" id="too">
    <Fade top cascade>
      <div><h1>ToDo</h1></div>
    </Fade>
    <Todo/>
      
    </div>
    <div className="benf" id="benf">
    <Fade big cascade><div><h1>Benefits</h1></div></Fade>
    <div className="benfo">
    <Fade left cascade><div><img src={"./pictures/R (19).jpeg"}></img></div></Fade>
    <Fade right cascade>
      <div >
      <p className="P">
      To-do lists help prioritize tasks, improve time <br></br>
      management and organization,reduce stress, increase<br></br>
       accountability. They break down large tasks into smaller,<br></br>
        manageable ones and create a sense of motivation to get things done.<br></br>
      </p>
      </div></Fade>

    </div>
    </div>
    <div className="more" id="more">
      <Fade big cascade><h1>About</h1></Fade>
      <Fade right cascade><p>Take control of your day and reach your full potential by using our to-do list! Keep track of your tasks, prioritize your responsibilities, and stay organized for a more productive and fulfilling life. Sign up now and start crossing items off your list!</p></Fade>
      <br></br><br></br>
      <Reveal effect="fadeInUp"><center><Link to="too" smooth={true} duration={1000}><button >ToDo List</button></Link></center></Reveal>
    </div>
    <div className="Contact" id="Contact">
    <Fade big cascade><h1>Contact</h1></Fade>
      <div className="div">
      <Fade left cascade>
        <div className="card">
        <div className="background">
          <img src={"./pictures/R (20).jpeg"} alt="background"/> </div> <div className="avatar-picture">
          <img src={"./pictures/Capture.JPG"} alt="avatar"/> </div> <div className="content">
          <p className="profile-name">Ayman Elimlahi</p>
          I’m a Junior Fullstack Developer,
          love working with <em>React</em> and <em>Bootstrap</em>.
          </div>
        </div></Fade>
        
        <Fade right cascade><div className="contact me ">
          <form onSubmit={sendEmail} >
          <h2 className="feed">Give us your FeedBack</h2>
          <input type="text" placeholder="first name " className="first " name="first name"/>
          <input type="text" placeholder="last name " className="last" name="last name"/> <br></br>
           <input type="email"  className="k "placeholder="email" name="email"/> <br></br>
           <textarea className="textarea" placeholder="write what you think ... "  name="message"></textarea><br></br>
           <center><button type="submit" className="button">Envoyer</button></center>
           </form></div>
           
           </Fade>
           
      </div>

    </div>
    </div>
  );
}

export default App;
