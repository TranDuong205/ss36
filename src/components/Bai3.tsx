import React, { useState } from 'react'

export default function Bai3() {
    const [color,setColor] = useState('black');
    const changeColor = () => {
        setColor(color === 'black' ? 'red' : 'black');
    };
  return (
    <div>
        <h1>Bai3</h1>
        <h1 style={{color:color}}>Tieu de van ban </h1>
        <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  )
}
