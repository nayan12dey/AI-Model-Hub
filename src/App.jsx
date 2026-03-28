

import NavBar from "./component/NavBar"
import Models from "./component/Models";
import Banner from "./component/Banner";
import Footer from "./component/Footer";


const getModels = async() => {
    const response = await fetch("/models.json")
    return response.json();
    
}

const modelPromise = getModels();



function App() {

  
  
  
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
      

    </>
  )
}

export default App

