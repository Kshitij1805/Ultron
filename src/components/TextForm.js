import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=() =>{
        console.log('Upper case was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlesmallclick=() =>{
        console.log('Lower case was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleclearclick=()=>{
        setText('')
    }


    const extractGmailAddresses = () => {
        // Regular expression to match Gmail addresses
        const gmailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/g;
        // Find all matches
        const matches = text.match(gmailRegex);
        // Set extracted emails to state (if matches are found, otherwise set to empty array)
        setEmails(matches || []);
    };

    const handleonChange=(event) =>{
        console.log('On chnage')
        setText(event.target.value);

    }


    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }


    const [text, setText] = useState('Enter text here');
    const [emails, setEmails] = useState([]);
    return (
        <>
        <div className='container' style= {{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743', cursor: 'pointer'}} id="mybox" rows="8"></textarea>
            <button className='btn btn-primary my-3 mx-3'onClick={handleupclick}>Convert to Upper Case</button>
            <button className='btn btn-primary my-3'onClick={handlesmallclick}>Convert to Lower Case</button>
            <button className='btn btn-primary my-3 mx-3'onClick={handleclearclick}>Clear Text</button>
            <button className='btn btn-primary my-3 ' onClick={extractGmailAddresses}>Extract Gmail Addresses</button>
            <button className='btn btn-primary my-3 mx-3 ' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div>
                <h3>Extracted Emails:</h3>
                <ul>
                    {emails.map((email, index) => (
                        <li key={index}>{email}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
        <div className='container my-3' style= {{color: props.mode==='dark'?'white':'#042743'}} >
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in textbox to preview it "}</p>
        </div>
        </>
    )
}
