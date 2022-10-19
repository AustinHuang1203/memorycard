import React, {useState} from 'react'

export default function Items(props) {
    console.log(props.imagelink)
    const yes = props.imagelink;
    console.log(yes)
  return (
    <div>
    <img src={require(yes)} alt={props.name} height="300px" width="300px"/>
    </div>
  )
}
