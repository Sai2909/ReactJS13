
import React, { useState } from 'react'
import '../components/CopyToKeyBord.css';

export default function CopyToKeyBord() {
    const code = `npx create-react-app myapp`
    const [isCopied, setIsCopied] = useState(false)

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopy = () => {
        setIsCopied(true);
        copyTextToClipboard(code)
            .then(() => {
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

        <div className='codeBox'>
            <code className='copyContainer' >
                {code}
            </code>
            <div className='copyIcon' onClick={handleCopy}>
              
            </div>
            <div className='copiedAlert'
                style={{
                    visibility: `${isCopied ? 'visible' : 'hidden'}`,
                    opacity: `${isCopied ? '1' : '0'}`,
                    transform: `${isCopied ? `translate(0px, 0px)`
                        : `translate(0px, 40px)`}`,
                    transition: '0.3s ease-in-out',
                }}>
                <div className='check'>
                    
                </div>
                Copied to clipboard
            </div>
        </div>
    )
}






