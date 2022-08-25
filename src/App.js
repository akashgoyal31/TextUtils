// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // return sirf ek hi element ko kar sakte h if ek se jada element ko return karna h toh <> </> ye syntax k andar code likhna hoga
  const [mode, setMode] = useState("light"); //weather dark mode is enable or not
  const [alert, setAlert] = useState(null); //weather dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#08111f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes> */}
            {/* /users--> component 1
            /users/home -->component 2  */}
          {/* <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>}/> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

//JSX m jitne bhi tag hote h sab ko close karna padta h jaise k input tag m last m /> ye lagana jaruri h

  /* ese Html m javascript use kar sakte h java script k variable ko { } is bracket m likh kar  */

// JSX basically HTML hi h bas ese m class ko className se replace karenge or for ko htmlFor se or jaha javascript likhna h vaha curly bracket ka use karenge
// return k andar  jo syntax likha h html ka ushe hi jsx bolte h

export default App;
