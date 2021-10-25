import React, {useState} from 'react'


export default function Clicker() {

const [num, setNum] = useState(0)

const numIncrease = () => {
    setNum(num + 1)
}

const numDecrease = () => {
    setNum(num - 1)
}

    return (
        <div className = 'container'>
        <h1>Click Away!</h1>
        <h3>{num}</h3>
        <button className = 'btn btn-danger' onClick = {numDecrease}><i class="bi bi-dash-square"></i></button>
        <button className = 'btn btn-success' onClick = {numIncrease}><i class="bi bi-plus-square"></i></button>
        
      </div>
    );
}