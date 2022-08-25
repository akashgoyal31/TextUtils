import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLoClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleClear = () => {
    // console.log("Upper case was clicked");
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); // ye text variable ko update karega old text plus new text se
  };
  // useState ek hook h
  // yaha per text ek state h jis k by default value useState se aya m
  const [text, setText] = useState("Enter text here"); // ye syntax hota h useState ko use karne ka
  // ese m Text ek variable h jis k value useState k andar jo likha h vo h , setText ek function h jis k help se text variable k value ko update kar sakta h
  // Text = "dhssdfjgdfj";  aise update karna yaha allowed nhi h
  // yaha per text variable k default value 'Enter text here '  h
  
  //   text= "new text"; wrong way to change the state
  //   setText("new text"); right way to change the state
  
  const handleCopy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
    
  }
  
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space remove!", "success")
  }

  return (
    <>
      <div className="container"  style={{color:( (props.mode==='dark')?"white":"black")}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            style={{backgroundColor:( (props.mode==='dark')?"#08111f":"white"),
            color:( (props.mode==='dark')?"white":"black")}}
           
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Space 
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container "  style={{color:( (props.mode==='dark')?"white":"black")}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008*text.split(" ").length} minutes read</p> 
        {/* 1 word ko read karne m 0.008 minutes lagta h */}
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it "}</p>

{/*
Defination of split function 

The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.

 */}
      </div>
    </>
  );
}
