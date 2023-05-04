import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startRemoveList } from "../actions/orderAction";
import "../App.css"
import { Card } from "antd";

const AddSearchItem = () => {
  const [check, setCheck] = useState(false)
  const add = useSelector((state) => {
    return state.order.add
  })


  const dispatch = useDispatch()
  let sum = 0
  add.map((ele) => {
    return sum = sum + ele.amount

  })
  const msg = useSelector((state) => {
    return state.order.messege
  })


  const display = useSelector((state) => {
    return state.order.display
  })


  useEffect(() => {
    if (check) {
      setCheck(false)
    }
  }, [check])





  return (
    <div>
      {
        add.length > 0 && <h2>Orders</h2>
      }
      {
        add.map((ele, i) => {
          return <div>
            <h1 key={ele._id}><Card style={{
              width: 200,
              backgroundColor: "orange",
            }}>#{i + 1}-{ele.name}
              {
                i + 1 === 1 && <input key={ele._id} type="checkbox" checked={check === true} onChange={(e) => {

                  setCheck(e.target.checked)
                  dispatch(startRemoveList(ele._id))

                }} />
              }</Card>
            </h1>
            <div className="order">
              <span style={{ color: "green" }}>{msg.message}</span>
            </div>
          </div>
        })

      }

      <div className="choc">
        <span style={{ color: "blue" }}><h2>{display.message}</h2></span>

      </div>
      {
        add.length > 0 &&
        <h1><Card style={{
          width: 100,
          backgroundColor: "orange",
        }}>{sum}</Card></h1>

      }
    </div>
  )
}
export default AddSearchItem