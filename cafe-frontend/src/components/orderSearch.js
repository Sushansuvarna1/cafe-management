import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSearchList, startAddItem, startGetItem } from "../actions/orderAction";
import "../App.css"
import { Card } from "antd"


const OrderSearch = () => {
    const [item, setItem] = useState('')

    const search = useSelector((state) => {
        return state.order.search
    })

    const add = useSelector((state) => {
        return state.order.add
    })




    const err = useSelector((state) => {
        return state.order.errors
    })
    

    let sum = 0
    search.map((ele) => {
        return sum = sum + ele.amount

    })


    const handleItemChange = (e) => {
        setItem(e.target.value)
    }


    const dispatch = useDispatch()
    useEffect(() => {
        if (item.length > 3) {
            dispatch(startSearchList(item))
        }

    }, [item, dispatch])

    const addItem = (id) => {
        const formData = {
            name: id.name,
            type: id.type,
            amount: id.amount,
            ItemId: id._id,

        }
        dispatch(startAddItem(formData))
        setItem('')
    }

    useEffect(() => {
        dispatch(startGetItem())
    }, [])


    return (


        <div>
            <form className="App">
                <input type="text" placeholder="search item" value={item} onChange={handleItemChange} />

            </form>
            <div className="App">
                {
                    err.message && <span style={{ color: "red" }}>{err.message}</span>
                }
            </div>


            {


                item.length > 3 && search.map((ele) => {
                    return <h5 key={ele._id}>  <Card style={{
                        width: 200,
                        backgroundColor: "light-Orange",
                    }}>
                        {ele.name} <button onClick={() => {
                            addItem(ele)
                        }}>Add</button></Card></h5>


                })

            }

            {
                add.length < 1 &&
                search.length > 0 &&
                item.length > 3 &&
                <div className="cat">
                    <h1> <Card style={{
                        width: 100,
                        backgroundColor: "orange",
                    }}>{sum}</Card></h1>
                </div>


            }
        </div>)


}
export default OrderSearch