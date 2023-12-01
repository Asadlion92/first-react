import './App.css'
import Hello from './components/Hello/Hello'

function App() {

  const myname1 = "Ja'far"
  const myname2 = "Musa"

  return (
    <div>
      <Hello name={myname1} color="red" />
      <Hello name={myname2} color="blue" />
    
    </div>
  )
}

export default App
