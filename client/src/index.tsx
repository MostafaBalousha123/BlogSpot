import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import ApiService from './services/apiServices'
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

ApiService.init()
ApiService.setHeader()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)
