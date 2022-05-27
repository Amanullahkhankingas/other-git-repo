// import logo from './logo.svg';
import React, { useState } from "react";
import "./Appa.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import Routes from "react";/
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
  
// }from "react-router-dom";

// let name = "<b>aman</b>";

function App() {
  //jsx file is that // it is a javascript syntex extention

  //down section is bg color mode
  // const[color,useColor] =useState("")
  //  let green,blue,black;
  let bgs;
  const [bg, setBg] = useState("");

  const color = (event) => {
    bgs = event;
    setBg(bgs);

    setButtonText("Enable Black mode");

    // document.body.style.background = `green`
  };
  const color1 = (event) => {
    bgs = event;
    setBg(bgs);

    setButtonText("Enable Black mode");

    // document.body.style.background = `green`
  };
  // const colorblue = (event)=>{
  //   // bgg=color

  //   blue= document.getElementById("blue")
  //   setBg(blue)

  //   setButtonText("Enable Blue mode")
  //   // document.body.style.background = `green`
  // }
  // const colorgreen = (event)=>{

  //   // bgg=color
  //   green= document.getElementById("green")
  //  setBg(green)

  //  // document.body.style.background = `green`
  // }

  //upper section is bg color mode

  const [buttonText, setButtonText] = useState("Enable Dark Modec");

  const [alert, setAlert] = useState("");

  let showalert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    });

    // setTimeout(() => {
    //   setAlert("");
    // }, 3700);
  };

  const [modey, setModey] = useState("light");
  // const [bcolor,setBcolor] = useState("white")
  let toggles = () => {
    if (modey === "light") {
      setModey("dark");
      //  document.body.style.background = "#565353"
      // setBcolor("light")

      document.body.style.background = `${bg}`;
      setButtonText("Back Light Mode");

      document.title = "TextUtlis - Enable Dark Mode";

      // setInterval(() => {
      //   document.title = "This App is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install it now ";
      // }, 1500);

      // setTimeout(() => {

      // }, 1500);
      showalert(" Dark Mode has been enable", "Success");
    } else {
      setModey("light");
      document.body.style.background = "white";

      document.title = "TextUtlis - Back to light Mode";
      // setBcolor("dark")
      // document.body.style.background = bcolor,
      setButtonText("Enable Dark Mode");

      showalert(" Light Mode has been enable", "Success");
    }
  };
  // document.body.style.background = {bcolor};

  return (
    //here in react we can return only one tag

    //by the use of jsx segment tag we can return multi tags
    //  <>

    // <h1>hellow this is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with kolar Sardar
    //     </a>
    //   </header>
    // </div>
    // </>

    //lecture 4 JSX file understanding

    // <div className="blank">lovely</div>
    // <>
    // <nav>
    //   <ul>
    //     <li>Home</li>
    //     <li>Services</li>
    //     <li>About Us</li>
    //     <li>Contact Us</li>
    //   </ul>
    //   <section>
    //     <h1>My Name is {name}</h1>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique? Facere, commodi! Excepturi, et minus ipsam quibusdam odio ut obcaecati distinctio quae animi quas, harum veniam doloribus vero non porro.
    //   </section>
    // </nav>
    // </>

    //lecture 5    // Project 1 setup + adding bootsrap in react

    <>
      {/* <Navbar title="textUtils" homeText= "home"  modey={modey}  toggles={toggles}  buttonText = {buttonText} colorgreen={colorgreen} colorblue={colorblue} colorblack={colorblack}/> */}

      {/* <Navbar  /> */}

      {/* <TextArea heading= "Enter the text here for analyzing" summry = "Text Summry"  modey= {modey} showalert={showalert} bcolor={bcolor}/> */}

      {/* <Router>
        <Navbar
          title="textUtils"
          homeText="home"
          modey={modey}
          toggles={toggles}
          buttonText={buttonText}
          color={color}
          color1={color1}
        />
        <Alert alert={alert} />
        <div>
        <Routes>
        <Route exact path="/about">
        <About/>
        </Route>
        <Route exact path="/">
        <TextArea
        heading="Enter the text here for analyzing"
        summry="Text Summry"
        modey={modey}
        showalert={showalert}
            />
            </Route>
            </Routes>
            </div>
          </Router> */}

<Navbar
  title="textUtils"
  // homeText="home"
  modey={modey}
  toggles={toggles}
  buttonText={buttonText}
  color={color}
  color1={color1}


/>
<Alert alert={alert} />


<TextArea
heading="Enter the text here for analyzing"
summry="Text Summry"
modey={modey}
showalert={showalert}
/>
{/* <About/> */}


    </>
  );
}

export default App;
