import { useState } from "react"

export function TextComponent() {
    const [data, setData] = useState('');
    const [text, setTxt] = useState('');

    function handlechange(e) {
        setData({
            timestamp: new Date().toUTCString(),
            Name: e.target.value
        })
    }
    function handleRegisterClick() {
        setTxt(data);
    }

    return (
        <>
            <div>
                <textarea cols={40} rows={10} onChange={handlechange}></textarea><br></br>
                <button onClick={handleRegisterClick} className="btn btn-primary w-25">Register</button>
            </div>
            <dt>{text.timestamp}</dt><br></br>
            <dd>{text.Name}</dd>
        </>
    )
}