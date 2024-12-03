"use client"
import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        {count} <button onClick={() => setCount((c => ++c))}>+</button>
        </div>
  )
}

export default Counter