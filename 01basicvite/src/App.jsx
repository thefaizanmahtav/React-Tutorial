import Greet from "./greet" 

function App() {
  const name = "faizan" + " mahtav"
  return (
    <> {/* <> in react empty angle bracket called fragment */}
      <h1>Hello Boss! {name}</h1> {/* In Here {} are treeting variable witch is called evaluate expiration and only {} are called expiration */}
      <Greet /> {/*In react we can create won HTMP tage as we wanted*/}
    </>
  )
}
export default App
