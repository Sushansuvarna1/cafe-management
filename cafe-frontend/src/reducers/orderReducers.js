const intialValue = {
  orders: [],
  search: [],
  add: [],
  errors: {},
  messege: {},
  display: {}
}

const orderReducers = (state = intialValue, action) => {
  console.log("action", action.payload)
  switch (action.type) {
    case "LIST_ORDER": {
      return { ...state, orders: action.payload }
    }
    case "LIST_SEARCH_ORDER": {
      return { ...state, search: action.payload }

    }
    case "SET_ERR": {
      return { ...state, errors: action.payload }
    }
    case "ADD_ITEM": {
      return { ...state, add: [...state.add, action.payload] }
    }
    case "LIST_ADD": {
      return { ...state, add: action.payload }
    }
    case "ADD_MESSAGE": {
      return { ...state, messege: action.payload }
    }
    case "ADD_DISPLAY": {
      return { ...state, display: action.payload }
    }
    case "REMOVE_LIST": {
      return {
        ...state, add: state.add.filter((ele) => {
          return ele._id !== action.payload._id
        })
      }
    }
    case "ADD_RADIO": {
      return { ...state, orders: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}

export default orderReducers