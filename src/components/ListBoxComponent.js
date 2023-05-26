
import React, { useState } from 'react'
import '../components/ListBoxComponent.css';
//import { IoIosArrowDown } from 'react-icons/io';
//import { BiCheck } from 'react-icons/bi';

const ListBoxComponent = () => {
    const [dropDown, showDropDown] = useState(false)
    const [select, setSelect] = useState('Terminator')
    let names = ['Terminator', 'Indestructible', 'Bumblebee', 'Party Wagon', 'Boomer Siren', 'Turtle Taxi']
    return (
        <div className='listBoxContainer'>
            <button className='listButton'
                onBlur={() => showDropDown(false)}
                onFocus={() => showDropDown(!dropDown)}>{select}</button>
            <ul className='listItems' style={{
                opacity: !dropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !dropDown ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    names.map((name, index) => {
                        return (<li className='list' key={index}
                            onClick={() => { setSelect(name); showDropDown(false) }}
                            style={{ fontWeight: select === name ? '500' : '400' }}>
                           
                            {name}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default ListBoxComponent