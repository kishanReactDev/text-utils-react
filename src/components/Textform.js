// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to Uppercase!", "success");
  };

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase!", "success");
  };

  const inversetext = () => {
    let newtext = text.split(" ");
    console.log(newtext);

    let variable = "";
    for (let index = 0; index < newtext.length; index++) {
      let element = newtext[index];

      if (index % 2 === 0) {
        element = element.toUpperCase();
      } else {
        element = element.toLowerCase();
      }

      if (index === newtext.length - 1) {
        variable = variable + element;
      } else {
        variable = variable + element + " ";
      }
    }
    setText(variable);
    props.showAlert("converted to alternative inverseword!", "success");
  };

  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text is clear!", "success");
  };

  const inverseword = () => {
    let newtext = text.split(" ");

    // my name
    let variable = "";
    for (let index = 0; index < newtext.length; index++) {
      let element = newtext[index];

      let word = " ";
      for (let index = 0; index < element.length; index++) {
        let element2 = element[index];
        if (index % 2 === 0) {
          element2 = element2.toUpperCase();
        } else {
          element2 = element2.toLowerCase();
        }
        word = word + element2;
      }
      variable = variable + word;
    }
    setText(variable);
    props.showAlert("converted to alternative inverse characters!", "success");
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };



  const wordcounter = () => {

    let a= text.split(' ')
    
    let filteredArray = a.filter(element => element !== '');

    return filteredArray.length
   

  }


  const charactercounter = ()=>{

    let a =text.split('')
    console.log(a);
    
    
    let characters = a.filter(element => element !== ' ');  

    return characters.length;
    

  }


  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="8"
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1  " onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1  " onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1  " onClick={handleclearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1  " onClick={inversetext}>
          inverse Text
        </button>
        <button className="btn btn-primary mx-2 my-1  " onClick={inverseword}>
          inverse alternative
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>
          {wordcounter()} words and {charactercounter()} characters
        </p>
        <p>{0.008 * text.split(" ").length} minitues read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter somthing in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
