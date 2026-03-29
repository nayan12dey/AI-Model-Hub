

import NavBar from "./component/NavBar"
import Models from "./component/Models";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import { useState } from "react";


const getModels = async () => {
  const response = await fetch("/models.json")
  return response.json();

}

const modelPromise = getModels();



function App() {

  const [activeTab, setActiveTab] = useState("model");

  const [carts, setCarts] = useState([])
  // console.log(carts)

  // console.log(activeTab);



  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models" onClick={() => setActiveTab("model")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={() => setActiveTab("cart")} />
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      
      <Footer></Footer>


    </>
  )
}

export default App

