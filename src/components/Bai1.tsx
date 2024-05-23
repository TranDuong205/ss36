import React, { useState } from 'react'

export default function Bai1() {
    
    const [name]=useState<string>('Tran Manh Duong')
  return (
    <div>
        <h1>Bai1</h1>
        <h4>{name}</h4>
    </div>
  )
}
