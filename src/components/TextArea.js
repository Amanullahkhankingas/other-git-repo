import React, {useState} from 'react'



export default function TextArea(props) {
    const [text, setText] = useState("");

    // setText("new text") // correct way to change the state
    // text= "new text" // correct way to change the state

    let textUpClick = ()=> {
        console.log("upper case" + text);
        let newtext = text.toUpperCase()

        setText(newtext)

        props.showalert("Text convert to UpperCase", "Success");
      }
      let textLowClick = ()=>{
      let lowtext = text.toLowerCase()
      setText(lowtext)

      props.showalert("Text convert to LowerCase", "Success");
    }
    let textClearClick = ()=>{
      
      setText(" ")
      props.showalert("Ready Box for new text", "Success");
    }
    let dele
    let character
    let replaced
    // characterand word deleting from text
    
    let wordDelete = (charDele)=>{
      character = charDele.target.value
      console.log(character)

    }
    let wordReplace = (wordrepla)=>{
      replaced = wordrepla.target.value
      console.log(replaced)
      
    }
    
    
    let charDele = ()=>{
      let deleteCharacterFromText = text.replaceAll(character ,replaced)
      
      
      setText(deleteCharacterFromText)
      props.showalert("New word is Replaced by selected word", "Success");
    }
    
    let handleDeleteWord = (select)=>{
      dele = select.target.value
      // console.log("dele " + dele)
    }
    
    
    let textDeleteClick = ()=>{
      
      // for(let k=0 ;k<=text.length;k++){
        
        
        
        // let s= "s"
        // let S= "S"  
        
        //    let updateText = text.replaceAll(S,"")
        //    let T =updateText.replaceAll(s,"")
        //      setText(T)
        
        
        
        
        let word = " " + dele + " "
        
        
        let updateText = text.replaceAll(word," ")
        
        setText(updateText)
        
        props.showalert(" Selected word is deleted from text", "Success");
        
        // }
      }
      
      
      
      let handleOnChange = (event)=>{
        setText(event.target.value);
        console.log("OnChange");
      }
      
      
      
      

    //copy wala code for text coping

    const handleCopy = ()=>{
      
  
      let text = document.getElementById("mybox");
      
    text.select();
    // text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value)
    
    props.showalert("Text of the box is copied", "Success");
  }
  
    //deleting extra spacing from text
    
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/)
         setText(newText.join(" "))
     
         props.showalert("Remove Extra spaces from text", "Success");
     };
     
     
     
     return (
    <div>
    {/* <div className={` bg-${props.bcolor}`}> */}
        < >
               
       <div className= {`container my-4 text-light text-${props.modey === "light"? "dark" : "light"   } `}>
             <h1>{props.heading}</h1>
        <div className="mb-3">
          
          <textarea className= 'form-control  '  value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
        </div>
        
        <button className='btn btn-primary mx-2'  onClick={ textUpClick }>Conver to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={textLowClick}>Conver to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={textClearClick}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={textDeleteClick}>Delete Words</button> <input type="text" placeholder='Write any word to delete from text' onChange={handleDeleteWord} /> <br />
        <button className='btn btn-primary mx-2 my-4' onClick={charDele}>Replace Word</button><input className='my-4 mx-2' type="text" placeholder='Write word for  replace' onChange={wordReplace} /> <input className='my-4 mx-2' type="text" placeholder='by which word' onChange={wordDelete} />
        </div>

        
               
         <div className={` container text-${props.modey === "light"? "dark" : "light"   } `}>
             <h1>{props.summry}</h1>
             <p>{(text.split(" ").length-1 )} words and {(text.length)} characters</p>
             <p>{(text.split(" ").length) * 0.008} Minutes require to read</p>
       
        </div>

        <div  className={` container text-${props.modey === "light"? "dark" : "light"   }`}>
          <h1 className='my-2' >Preview</h1>
          <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        
        
        </>
      
    </div>
  )
}
