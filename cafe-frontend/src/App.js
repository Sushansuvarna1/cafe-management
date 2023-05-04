import React from "react";
import OrderContainer from "./components/orderContainer";
import OrderSearch from "./components/orderSearch";
import AddSearchItem from "./components/addSearchItem";



const App = () => {

  return (
    <div>
      <OrderContainer />
      <OrderSearch />
      <AddSearchItem />
    </div>
  )
}
export default App