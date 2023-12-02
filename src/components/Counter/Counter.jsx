import React, {useState} from 'react'
import './Counter.css'

function Counter() {

    // let count = 1;
    const [count, setCount] = useState(0)

    const increment = () => {
        console.log('increment')
        //increment count
        // count ++;
        setCount(count + 1)
        console.log('count is ', count)
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div className='counter-container'>
        <h3>Count is {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter