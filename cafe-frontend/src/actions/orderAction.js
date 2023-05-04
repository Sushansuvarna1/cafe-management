import axios from "axios";


export const startGetOrderList = () => {
    return (dispatch) => {
        axios.get("http://localhost:3090/api/order")
            .then((response) => {
                const result = response.data
                dispatch(listOrder(result))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const listOrder = (data) => {
    return {
        type: "LIST_ORDER",
        payload: data
    }
}

export const startSearchList = (value) => {
    return (dispatch) => {
        axios.get(`http://localhost:3090/api/ordersearch/${value}`)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("message")) {
                    dispatch(setErrors(result))
                } else {
                    dispatch(listSearchOrder(result))

                    dispatch(setErrors({}))
                }

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const setErrors = (err) => {
    return {
        type: "SET_ERR",
        payload: err
    }
}

const listSearchOrder = (data) => {
    return {
        type: "LIST_SEARCH_ORDER",
        payload: data
    }
}

export const startAddItem = (id) => {
    return (dispatch) => {
        axios.post("http://localhost:3090/api/orderadd", id)

            .then((response) => {
                const result = response.data
                console.log("res", result)
                dispatch(addItemList(result.order))
                dispatch(addMessage(result))

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const addItemList = (data) => {

    return {
        type: "ADD_ITEM",
        payload: data
    }
}

const addMessage = (result) => {
    return {
        type: "ADD_MESSAGE",
        payload: result
    }
}

export const startGetItem = () => {
    return (dispatch) => {
        axios.get("http://localhost:3090/api/orderget")
            .then((response) => {
                const result = response.data
                dispatch(dataList(result))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const dataList = (data) => {
    return {
        type: "LIST_ADD",
        payload: data
    }
}

export const startRemoveList = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3090/api/orderremove/${id}`)
            .then((response) => {
                const result = response.data
                dispatch(removelist(result.order))
                dispatch(displayAdd(result))


            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const removelist = (result) => {
    return {
        type: "REMOVE_LIST",
        payload: result
    }
}

const displayAdd = (data) => {
    return {
        type: "ADD_DISPLAY",
        payload: data
    }
}

export const startRadioButton = (value) => {
    return (dispatch) => {
        axios.get(`http://localhost:3090/api/radio/${value}`)
            .then((response) => {
                const result = response.data
                dispatch(addRadio(result))

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const addRadio = (res) => {
    return {
        type: "ADD_RADIO",
        payload: res
    }
}


