import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetOrderList, startRadioButton } from "../actions/orderAction";
import "../App.css"

const OrderContainer = () => {
  const [add, setAdd] = useState('')

  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.order.orders
  })

  useEffect(() => {
    dispatch(startGetOrderList())
  }, [dispatch])

  const handleChange = (e) => {

    setAdd(e.target.value)

  }

  useEffect(() => {
    dispatch(startRadioButton(add))
  }, [dispatch, add])
  return (

    <div>

      <div className="App">
        <h1>Cafe Order Management</h1>
      </div>
      <div className="App">
        <input type="radio" name="add" value="drink" onChange={handleChange} />drink
        <input type="radio" name="add" value="food" onChange={handleChange} />food
      </div>

      <div >

        <table border="1" className="table" >
          <thead>
            <tr>
              <th>name</th>
              <th>type</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {

              data.map((ele) => {
                return <tr key={ele._id}>
                  <td>{ele.name}</td>
                  <td>{ele.type}</td>
                  <td>{ele.amount}</td>
                </tr>
              })

            }
          </tbody>
        </table>
      </div>
    </div>



  )
}
export default OrderContainer