import React from 'react'
import { useState, useEffect } from 'react'

const ChangeBg = ({ color, buttonName, nameColor }) => {

    let [currentColor, setCurrentColor] = useState('#242424')

    useEffect(() => {
        document.body.style.backgroundColor = currentColor;
      }, [currentColor]);

    const choseColor = () => {
        document.body.style.backgroundColor = color;
        setCurrentColor(color);
      }
    
  return (
    <>
        <button
            className='rounded-full btn'
            style={{ backgroundColor: color, color: nameColor || 'white', padding: '5px 20px', borderRadius: '50px'}}
            onClick={choseColor}
        >{buttonName}</button>
    </>
    
  )
}

export default ChangeBg