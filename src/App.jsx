import './App.css'
import Hello from './components/Hello/Hello'
import Counter from './components/Counter/Counter'
import Welcome from './components/Welcome/Welcome'

function App() {

  const myname1 = "Ja'far"
  const myname2 = "Musa"

  // const colors = ["red", "blue", "green", "yellow"]

  const users = [
    {name: "Musa", color: "red", id: 0, country: "Senegal"}, 
    {name: "Isa", color: "blue", id: 1, country: "Morocco"}, 
    {name: "Ali", color: "green", id:2, country: "Turkey"}
  ]

  return (
    <div>

      <Welcome />

      {/* {users.map(item => <Hello user={item} key={item.id} />)} */}
      {/* {users.map(item => <Hello name={item} color="red" />)} */}


    {/* <Counter /> */}
      {/* <Hello name={myname1} color="red" />
      <Hello name={myname2} color="blue" /> */}
      {/* {colors.map((item, index) =><p key={index}>{item}</p>)} */}
    
    </div>
  )
}

export default App
