import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase was Clicked" + text);   //for displaing msg on console
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }

  const handleOnChange = (event) =>{
    // console.log("On change");   
    setText(event.target.value);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");    //from  comment
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const [text, setText] = useState(' ');  //useState hooks
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" onChange={handleOnChange}  ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}  >
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes Read</p>
      <h2 >Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

// You can Change TEXT to uppercase from lower without reloading page