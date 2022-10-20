import React from 'react'
import '../styles/style.css'
import Items from './items.js'

export default function Itemboard(props) {
 
      const array2 = props.array1.sort(()=>Math.random()-0.5);
    
    
  return (
    <div class="itemboard">
    {array2}
    </div>
  )
}
