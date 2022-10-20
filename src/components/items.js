import React, {useState} from 'react'
import '../styles/style.css'

export default function Items(props) {
  return (
    <div onClick={props.select1} class="items1">
    <img src={require(`../images/${props.imagelink}`)} alt={props.name}height="80%" width="auto"/>
    </div>
  )
}
