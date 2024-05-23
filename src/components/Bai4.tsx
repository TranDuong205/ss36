import React, { useState } from 'react'

export default function Bai4() {
    const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
}
  return (
    <div>
        <h1>Bai4</h1>
        <button onClick={toggleVisibility}>
        {isVisible ? 'Hien tieu de':'Nhap noi dung'  }
        </button>
      
        {isVisible && <h1>Dan nhap tieu de</h1>}
    </div>
  )
}
