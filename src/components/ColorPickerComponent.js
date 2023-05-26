
import React, { useState } from 'react';
import '../components/ColorPickerComponent.css';

export default function ColorPickerComponent() {
    const [pickColor, setPickColor] = useState('#f39c0f');
    return (
        <div className='colorPickerContainer'>
            <div className='colorBox' style={{ backgroundColor: `${pickColor}` }}></div>
            <div className='colorPalatte'>
                <div className="color" id="c1" onClick={() => setPickColor('#f39c0f')}></div>
                <div className="color" id="c2" onClick={() => setPickColor('#70f601')}></div>
                <div className="color" id="c3" onClick={() => setPickColor('#B592FD')}></div>
                <div className="color" id="c4" onClick={() => setPickColor('#00D4FE')}></div>
                <div className="color" id="c5" onClick={() => setPickColor('#f7f8f2')}></div>
                <div className="color" id="c6" onClick={() => setPickColor('#fe06d1')}></div>
                <div className="color" id="c7" onClick={() => setPickColor('#1607f1')}></div>
                <div className="color" id="c8" onClick={() => setPickColor('#131412')}></div>
                <div className="color" id="c9" onClick={() => setPickColor('#FF2B20')}></div>
                <div className="inputBox">
                    <div className='hex'>HEX:</div>
                    <input type="text" value={pickColor} className='colorInput' id="hex" 
                    onChange={(e) => setPickColor(e.target.value)} />
                </div>
            </div>
        </div>
    )
}





