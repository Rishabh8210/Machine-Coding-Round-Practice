import React from 'react'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import { Provider } from 'react-redux'
import store from './utils/store.js'
const App = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Home />
        </Provider>
    )
}
export default App;