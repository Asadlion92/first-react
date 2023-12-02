import './App.css'
import Hello from './components/Hello/Hello'
import Counter from './components/Counter/Counter'

function App() {

  const myname1 = "Ja'far"
  const myname2 = "Musa"

  return (
    <div>
    <Counter />
      {/* <Hello name={myname1} color="red" />
      <Hello name={myname2} color="blue" /> */}
    
    </div>
  )
}

export default App
