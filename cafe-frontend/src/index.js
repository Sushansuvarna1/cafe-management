import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './store/store';
import { startGetOrderList } from './actions/orderAction';




const store = configStore()

console.log(store)


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(startGetOrderList())





console.log(store.getState())








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='name'>
    <Provider store={store}>
      <App />
    </Provider>
  </div>

);


