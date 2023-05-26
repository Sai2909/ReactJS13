
import React, { useState } from 'react'
import '../components/ReadioButton.css';
//import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import card1 from '../components/images/running1.jpg'
import card2 from '../components/images/running1.jpg'
import card3 from '../components/images/running1.jpg'

const RadioButton = () => {
    const [active, setActive] = useState(0)
    const data = [{ card: 'Dark Grey', img: card1 },
    { card: 'Royal Blue', img: card2 },
    { card: 'Voilet Pink', img: card3 }]

    return (
        <div className='radioContainer'>
            {
                data.map((cards, index) => {
                    return (
                        <div className={`radioGroup ${active === index ? 'radioGroupActive' : ''}`}
                            onClick={() => setActive(index)} key={index}>
                            <div className="feature">
                               
                                <h5>{cards.card}</h5>
                            </div>
                            <img className='card' src={cards.img} alt="card2" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RadioButton







