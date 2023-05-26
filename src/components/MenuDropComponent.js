
import React, { useState } from 'react'
//import { IoIosArrowDown } from 'react-icons/io';
//import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
//import { HiOutlineDuplicate, HiOutlineArchive, HiOutlineDocumentRemove } from 'react-icons/hi';
import '../components/MenuDropComponent.css';

const MenuDropComponent = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className='dropDownContainer'>
            <button className='dropDownButton'
                onClick={() => setShowDropDown(!showDropDown)}>
                Options
                
            </button>
            <ul className="dropDownItems" style={{
                opacity: !showDropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !showDropDown ? "hidden" : "visible",
                transform: !showDropDown ? "scale(0.9)" : "scale(1)",
                transformOrigin: "top right"
            }}>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <span className='menuText'> Edit</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Duplicate</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Move</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Archive</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Delete</span>
                </li>
            </ul>
        </div>
    )
}
export default MenuDropComponent


