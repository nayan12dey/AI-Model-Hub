
import { useState } from "react"
import NavBar from "./component/NavBar"
import Models from "./component/Models";
import Banner from "./component/Banner";

// props --> can send data in one way 
// Parent -->  Child
// hooks --> used for state changed

function App() {

  // hooks 
  const [tab, setTab] = useState("model")
  console.log(setTab)

  console.log("Render...");


  // const handleAge = (age) =>{
  //   console.log(age);
  // }

  // const [age, setAge] = useState(21);
  // console.log(age);
  
  
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      

    </>
  )
}

export default App

