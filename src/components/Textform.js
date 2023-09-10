/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Button from '@mui/material/Button';
// or


 export default function Textform(props) {
   const handleUpClick = ()=>{
     console.log("uppercase cliked" + text);
     let newText = text.toUpperCase();
     setText(newText)
   }
   const handleLoClick = ()=>{
    // console.log("uppercase cliked" + text);
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleClearClick = ()=>{
    // console.log("uppercase cliked" + text);
    let newText =  "";
    setText(newText)
   }
   const handleOnchange =(event)=>{
    console.log("on change")
    setText(event.target.value)
   }
   function handleCopyClick() {
    var copyText = document.getElementById("mybox");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
   }
   const handlespace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
   }
   const [text,setText] = useState('');
   return (
     <>
     <div className='container'>
     <h3>{props.heading}</h3>
      <div className='mb-7'> 
      <textarea className='form-control' value={text} onChange={handleOnchange} id="mybox" rows="9" ></textarea>
      </div>
      <Button variant="contained"onClick={handleUpClick}>convert to uppercase </Button>
      <Button variant="contained"onClick={handleLoClick}>convert to loercase </Button>
      <Button variant="contained"onClick={handleClearClick}>clear text</Button>
      <Button variant="contained"onClick={handleCopyClick}> text copy</Button>
      <Button variant="contained"onClick={handlespace}>Extra apace</Button>
      </div>
      <div className="container">
      <h1>YOURE TEXT SUMARY</h1>
      <p >{text.split(" ").length} word and {text.length}  charaters</p>
      <p>{0.008 * text.split(" ").length}minute to  read  </p>
      <h2>Preview</h2>
      <p>{text}</p>
      
      </div>
      
      </>
   );
 }